import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AchaucateringRoutingModule } from './achaucatering-routing.module';
import { ComponentModule } from '../components/component.module';

import { HomePageComponent } from './home-page/home-page.component';
import { Header1Component } from '../components/header1/header1.component';
import { Slider1Component } from '../components/slider1/slider1.component';
import { DichvuRoutingModule } from './dichvu/dichvu-routing.module';
import { AchaucateringComponent } from './achaucatering/achaucatering.component';
import { DichvuModule } from './dichvu/dichvu.module';
import { TintucSukienComponent } from './tintuc-sukien/tintuc-sukien.component';
import { GioiThieu1Component } from './gioi-thieu1/gioi-thieu1.component';
import { GioiThieu2Component } from './gioi-thieu2/gioi-thieu2.component';
import { HealthyFoodComponent } from './healthy-food/healthy-food.component';
import { DichVuComponent } from './dich-vu/dich-vu.component';
import { TuyenDungComponent } from './tuyen-dung/tuyen-dung.component';
import { TuyendungDetailComponent } from './tuyendung-detail/tuyendung-detail.component';
import { LienHeComponent } from './lien-he/lien-he.component';
import { CacDoiTacComponent } from './cac-doi-tac/cac-doi-tac.component';
import { SuatAnCongNghiepComponent } from './dichvu/suat-an-cong-nghiep/suat-an-cong-nghiep.component';
import { ThucDonToChucTiecComponent } from './thuc-don-to-chuc-tiec/thuc-don-to-chuc-tiec.component';

@NgModule({
  imports: [
    CommonModule,
    AchaucateringRoutingModule,
    ComponentModule
  ],
  declarations: [
    HomePageComponent,    
    Header1Component,
    GioiThieu1Component,
    GioiThieu2Component,
    HealthyFoodComponent,
    DichVuComponent,
    AchaucateringComponent,
    TintucSukienComponent, 
    TuyenDungComponent,
    TuyendungDetailComponent,
    LienHeComponent,
    Slider1Component
  ]
})
export class AchaucateringModule { }
