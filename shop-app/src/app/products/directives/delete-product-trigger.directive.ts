import { Directive, HostListener, Input } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { EditProductFormComponent } from '../components/edit-product-form/edit-product-form.component';
import { Product } from '../../types';
import { ProductsService } from '../services/products.service';

@Directive({
  selector: '[productsDeleteProductTrigger]'
})
export class DeleteProductTriggerDirective {
  @Input() productsDeleteProductTrigger: Product;

  @HostListener('click', ['$event']) onClick() {
    this.deleteProduct();
  }

  constructor(private productsService: ProductsService) {}

  deleteProduct() {
    this.productsService
      .deleteProduct(this.productsDeleteProductTrigger)
      .subscribe();
  }
}
