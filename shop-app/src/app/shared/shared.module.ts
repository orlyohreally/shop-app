import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ImageCropperModule } from 'ngx-image-cropper';

import { ImageLoaderComponent } from './components/image-loader/image-loader.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  declarations: [ImageLoaderComponent],
  imports: [
    CommonModule,
    ImageCropperModule,
    MatButtonModule,
    FlexLayoutModule
  ],
  exports: [ImageLoaderComponent]
})
export class SharedModule {}
