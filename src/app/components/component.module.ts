import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { BtnXemthemComponent } from './btn-xemthem/btn-xemthem.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule
  ],
  declarations: [
    BtnXemthemComponent
  ],
  exports: [
    BtnXemthemComponent
  ]
})
export class ComponentModule { }
