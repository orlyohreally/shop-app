import { Component, OnInit, Input } from '@angular/core';
import { Product } from '../../../types';
import { ProductsService } from '../../services/products.service';

@Component({
  selector: 'product-admin-product-view',
  templateUrl: './admin-product-view.component.html',
  styleUrls: ['./admin-product-view.component.css']
})
export class AdminProductViewComponent implements OnInit {
  @Input() product: Product;

  constructor(private productsService: ProductsService) {}

  ngOnInit(): void {}

  editProduct() {
    console.log('edit', this.product);
  }

  deleteProduct() {
    this.productsService.deleteProduct(this.product);
  }
}
