import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AgmCoreModule } from '@agm/core';
import { AchaucateringRoutingModule } from './achaucatering-routing.module';
import { ComponentModule } from '../components/component.module';

import { HomePageComponent } from './home-page/home-page.component';
import { Header1Component } from '../components/header1/header1.component';
import { Slider1Component } from '../components/slider1/slider1.component';
import { DichvuRoutingModule } from './dichvu/dichvu-routing.module';
import { AchaucateringComponent } from './achaucatering/achaucatering.component';
import { DichvuModule } from './dichvu/dichvu.module';
import { TintucSukienComponent } from './tintuc-sukien/tintuc-sukien.component';
import { Nav1Component } from './nav1/nav1.component';
import { GioiThieu1Component } from './gioi-thieu1/gioi-thieu1.component';
import { GioiThieu2Component } from './gioi-thieu2/gioi-thieu2.component';
import { HealthyFoodComponent } from './healthy-food/healthy-food.component';
import { DichVuComponent } from './dich-vu/dich-vu.component';
import { FooterComponent } from './footer/footer.component';
import { MapComponent } from './map/map.component';
import { TuyenDungComponent } from './tuyen-dung/tuyen-dung.component';
import { TuyendungDetailComponent } from './tuyendung-detail/tuyendung-detail.component';
import { LienHeComponent } from './lien-he/lien-he.component';
import { CacDoiTacComponent } from './cac-doi-tac/cac-doi-tac.component';
import { SuatAnCongNghiepComponent } from './dichvu/suat-an-cong-nghiep/suat-an-cong-nghiep.component';
import { ThucDonToChucTiecComponent } from './thuc-don-to-chuc-tiec/thuc-don-to-chuc-tiec.component';

@NgModule({
  imports: [
    CommonModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyD3T-BlBd0ZXo8nOLXjy1wI3YgOKlvDzro'
    }),
    AchaucateringRoutingModule,
    DichvuModule,
    ComponentModule
  ],
  declarations: [
    HomePageComponent,    
    Nav1Component,
    Header1Component,
    GioiThieu1Component,
    GioiThieu2Component,
    CacDoiTacComponent,
    HealthyFoodComponent,
    DichVuComponent,
    Slider1Component,
    FooterComponent,
    MapComponent,
    AchaucateringComponent,
    TintucSukienComponent, 
    TuyenDungComponent,
    TuyendungDetailComponent,
    LienHeComponent,
    SuatAnCongNghiepComponent,
    ThucDonToChucTiecComponent
  ]
})
export class AchaucateringModule { }
