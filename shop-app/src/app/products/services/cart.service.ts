import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Product } from '../../types';
import { map, take } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private cart = new BehaviorSubject<Product[]>([]);
  private cartApi = 'api/orders';

  constructor(private http: HttpClient) {}

  addToCart(product: Product) {
    return this.cart.asObservable().pipe(
      take(1),
      map(products => {
        this.cart.next([...products, product]);
      })
    );
  }

  getProducts(): Observable<Product[]> {
    return this.cart.asObservable();
  }

  clearCart() {
    this.cart.next([]);
  }

  chargeCart() {
    return this.http
      .post(this.cartApi, { products: this.cart.getValue() })
      .pipe(map(() => this.clearCart()));
  }
}
