import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  Input,
  Output,
  EventEmitter
} from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Product } from '../../../types';

@Component({
  selector: 'products-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProductFormComponent implements OnInit {
  @Input() form: FormGroup;
  @Input() errorMessage: string;

  @Output() submitted = new EventEmitter<Partial<Product>>();

  constructor() {}

  ngOnInit(): void {}

  submitForm() {
    console.log(this.form.value);
    if (!this.form.valid) {
      this.form.markAsTouched();
      return;
    }
    this.submitted.emit(this.form.value);
  }

  imageLoaded(image: string) {
    this.form.get('image').setValue(image);
  }
}
