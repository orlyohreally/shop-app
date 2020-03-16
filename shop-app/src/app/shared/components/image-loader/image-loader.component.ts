import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  Output,
  EventEmitter,
  Input
} from '@angular/core';
import { ImageCroppedEvent } from 'ngx-image-cropper';

@Component({
  selector: 'shared-image-loader',
  templateUrl: './image-loader.component.html',
  styleUrls: ['./image-loader.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ImageLoaderComponent implements OnInit {
  @Input() imageUrl: string;

  @Output() loaded = new EventEmitter<string>();

  loadedImage: string | ArrayBuffer;
  croppedImage = '';
  previewStyles: { [property: string]: string };
  imageLoaded = false;

  imageChangedEvent: Event;

  constructor() {}

  ngOnInit(): void {}

  onPreviewLoaded(event) {
    event.target.style['display'] = 'block';
    this.imageLoaded = true;
  }

  onFileChange(event: Event) {
    this.imageChangedEvent = event;
  }

  fileChangeEvent(): void {}

  imageCropped(event: ImageCroppedEvent) {
    this.croppedImage = event.base64;
    this.loaded.emit(this.croppedImage);
  }
}
