import { Component, OnInit, Input } from '@angular/core';
import { Product } from '../../../types';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'products-customer-product-view',
  templateUrl: './customer-product-view.component.html',
  styleUrls: ['./customer-product-view.component.css']
})
export class CustomerProductViewComponent implements OnInit {
  @Input() product: Product;

  constructor(private cartService: CartService) {}

  ngOnInit(): void {}

  addToCart() {
    this.cartService.addToCart(this.product).subscribe(() => {
      console.log('added to cart', this.product);
    });
  }
}
