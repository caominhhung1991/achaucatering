import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { BtnXemthemComponent } from './btn-xemthem/btn-xemthem.component';
import { BtnLienheComponent } from './btn-lienhe/btn-lienhe.component';
import { BtnComponentComponent } from './btn-component/btn-component.component';
import { SliderImageGalleryComponent } from './slider-image-gallery/slider-image-gallery.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule
  ],
  declarations: [
    BtnXemthemComponent,
    BtnLienheComponent,
    BtnComponentComponent,
    SliderImageGalleryComponent
  ],
  exports: [
    BtnXemthemComponent,
    BtnLienheComponent,
    BtnComponentComponent,
    SliderImageGalleryComponent
  ]
})
export class ComponentModule { }
