import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../../../types';
import { ProductsService } from '../../services/products.service';
import { map } from 'rxjs/operators';

@Component({
  selector: 'products-admin-view',
  templateUrl: './products-admin-view.component.html',
  styleUrls: ['./products-admin-view.component.css']
})
export class ProductsAdminViewComponent implements OnInit {
  products: Observable<Product[]>;

  constructor(private productsService: ProductsService) {}

  ngOnInit(): void {
    this.products = this.productsService.getProducts().pipe(
      map(products => {
        console.log('emit products', products);
        return products;
      })
    );
  }
}
