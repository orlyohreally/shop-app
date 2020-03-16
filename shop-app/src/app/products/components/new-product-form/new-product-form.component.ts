import { Component, OnInit, Inject } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { ProductsService } from '../../services/products.service';
import { Product } from '../../../types';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'products-new-product-form',
  templateUrl: './new-product-form.component.html',
  styleUrls: ['./new-product-form.component.css']
})
export class NewProductFormComponent implements OnInit {
  form: FormGroup;
  errorMessage: string;

  constructor(
    private productsService: ProductsService,
    private dialog: MatDialogRef<NewProductFormComponent>
  ) {}

  ngOnInit(): void {
    this.form = new FormGroup({
      title: new FormControl('', [Validators.required]),
      description: new FormControl('', [
        Validators.required,
        Validators.minLength(5),
        Validators.maxLength(100)
      ]),
      image: new FormControl('', [Validators.required]),
      price: new FormControl(0, [
        Validators.required,
        Validators.pattern('^(([0-9]*)|(([0-9]*).([0-9]*)))$')
      ])
    });
  }

  createProduct(product: Product) {
    this.productsService.createProduct(product).subscribe(
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
