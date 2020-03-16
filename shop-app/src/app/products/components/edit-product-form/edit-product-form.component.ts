import { Component, OnInit, Inject } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Product } from '../../../types';
import { ProductsService } from '../../services/products.service';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'products-edit-product-form',
  templateUrl: './edit-product-form.component.html',
  styleUrls: ['./edit-product-form.component.css']
})
export class EditProductFormComponent implements OnInit {
  form: FormGroup;
  errorMessage: string;

  constructor(
    @Inject(MAT_DIALOG_DATA)
    public product: Product,
    private productsService: ProductsService,
    private dialog: MatDialogRef<EditProductFormComponent>
  ) {}

  ngOnInit(): void {
    console.log('edit', this.product);
    this.form = new FormGroup({
      title: new FormControl(this.product.title, [Validators.required]),
      description: new FormControl(this.product.description, [
        Validators.required,
        Validators.minLength(5),
        Validators.maxLength(100)
      ]),
      image: new FormControl(this.product.image, [Validators.required]),
      price: new FormControl(this.product.price, [
        Validators.required,
        Validators.pattern('^(([0-9]*)|(([0-9]*).([0-9]*)))$')
      ])
    });
  }

  updateProduct(product: Product) {
    this.productsService
      .updateProduct({ ...product, _id: this.product._id })
      .subscribe(
        newProduct => {
          console.log('create product', newProduct);
          this.dialog.close();
        },
        (error: HttpErrorResponse) => {
          console.log(error);
          this.errorMessage = error.statusText;
        }
      );
  }
}
