import { Directive, HostListener, Input } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { EditProductFormComponent } from '../components/edit-product-form/edit-product-form.component';
import { Product } from '../../types';

@Directive({
  selector: '[productsEditProductTrigger]'
})
export class EditProductTriggerDirective {
  @Input() productsEditProductTrigger: Product;

  @HostListener('click', ['$event']) onClick() {
    this.editProduct();
  }

  constructor(private dialog: MatDialog) {}

  editProduct() {
    console.log(this.productsEditProductTrigger);
    this.dialog.open(EditProductFormComponent, {
      width: '60%',
      maxHeight: '80%',
      maxWidth: '700px',
      minWidth: '300px',
      restoreFocus: false,
      panelClass: 'dialog_scrollable',
      data: this.productsEditProductTrigger
    });
  }
}
