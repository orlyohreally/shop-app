import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatDialogModule } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatInputModule } from '@angular/material/input';
import { ProductsRoutingModule } from './products-routing.module';
import { ProductsComponent } from './components/products/products.component';
import { ProductComponent } from './components/product/product.component';
import { CustomerProductViewComponent } from './components/customer-product-view/customer-product-view.component';
import { ProductFormComponent } from './components/product-form/product-form.component';
import { NewProductTriggerDirective } from './directives/new-product-trigger.directive';
import { NewProductFormComponent } from './components/new-product-form/new-product-form.component';
import { ProductsAdminViewComponent } from './components/products-admin-view/products-admin-view.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EditProductFormComponent } from './components/edit-product-form/edit-product-form.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { AdminProductViewComponent } from './components/admin-product-view/admin-product-view.component';
import { SharedModule } from '../shared/shared.module';
import { EditProductTriggerDirective } from './directives/edit-product-trigger.directive';
import { CartComponent } from './components/cart/cart.component';

@NgModule({
  declarations: [
    ProductComponent,
    ProductsComponent,
    CustomerProductViewComponent,
    ProductFormComponent,
    NewProductTriggerDirective,
    NewProductFormComponent,
    ProductsAdminViewComponent,
    EditProductFormComponent,
    AdminProductViewComponent,
    EditProductTriggerDirective,
    CartComponent
  ],
  imports: [
    CommonModule,
    ProductsRoutingModule,
    MatButtonModule,
    MatCardModule,
    MatIconModule,
    MatProgressSpinnerModule,
    MatDialogModule,
    FlexLayoutModule,
    FormsModule,
    MatInputModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    SharedModule
  ],
  exports: [ProductsComponent, ProductsAdminViewComponent]
})
export class ProductsModule {}
