import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { switchMap, map } from 'rxjs/operators';
import { Observable, BehaviorSubject, of } from 'rxjs';
import { Product } from '../../types';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  private apiRoute = 'api/products';
  private products = new BehaviorSubject<Product[]>([]);

  constructor(private http: HttpClient) {}

  getProducts(): Observable<Product[]> {
    return this.products.asObservable().pipe(
      switchMap(products => {
        if (!products.length) {
          return this.http.get<Product[]>(this.apiRoute).pipe(
            map(loadedProducts => {
              this.products.next(loadedProducts);
              return loadedProducts;
            })
          );
        }
        return of(products);
      })
    );
  }

  createProduct(product: Product): Observable<Product> {
    console.log('create', product);
    return this.http
      .post<Product>(this.apiRoute, { product })
      .pipe(
        map(newProduct => {
          console.log(newProduct, [...this.products.getValue(), newProduct]);
          this.products.next([...this.products.getValue(), newProduct]);
          return product;
        })
      );
  }

  updateProduct(product: Product): Observable<Product> {
    console.log('edit', product);
    return this.http
      .put<Product>(`${this.apiRoute}/${product._id}`, { product })
      .pipe(
        map(updatedProduct => {
          console.log(updatedProduct, [
            ...this.products.getValue(),
            updatedProduct
          ]);
          this.products.next(
            this.products
              .getValue()
              .map(curProduct =>
                curProduct._id === updatedProduct._id
                  ? updatedProduct
                  : curProduct
              )
          );
          return product;
        })
      );
  }

  deleteProduct(product: Product): Observable<void> {
    console.log('delete', product);
    return this.http.delete(`${this.apiRoute}/${product._id}`).pipe(
      map(() => {
        this.products.next(
          this.products
            .getValue()
            .map(curProduct =>
              curProduct._id === product._id ? null : product
            )
        );
      })
    );
  }
}
