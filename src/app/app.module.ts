import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AgmCoreModule } from '@agm/core';
import { AppComponent } from './app.component';
import { Nav1Component } from './components/nav1/nav1.component';
import { Header1Component } from './components/header1/header1.component';
import { HeadVideo1Component } from './components/head-video1/head-video1.component';
import { Slider1Component } from './components/slider1/slider1.component';
import { DichVuComponent } from './components/dich-vu/dich-vu.component';
import { GioiThieu1Component } from './components/gioi-thieu1/gioi-thieu1.component';
import { FooterComponent } from './components/footer/footer.component';
import { GioiThieu2Component } from './components/gioi-thieu2/gioi-thieu2.component';
import { HealthyFoodComponent } from './components/healthy-food/healthy-food.component';
import { Map1Component } from './components/map1/map1.component';
import { GioiThieu3Component } from './components/gioi-thieu3/gioi-thieu3.component';
import { AppRoutingModule } from './app-routing.module';
import { HomePageComponent } from './components/home-page/home-page.component';
import { LienHeComponent } from './components/chi-tiet/lien-he/lien-he.component';
import { MapComponent } from './components/map/map.component';
import { AppService } from './services/app.service';
import { TuyenDungComponent } from './components/tuyen-dung/tuyen-dung.component';
import { TuyendungDetailComponent } from './components/tuyendung-detail/tuyendung-detail.component';
import { TintucSukienComponent } from './components/tintuc-sukien/tintuc-sukien.component';
import { DichvuModule } from './dichvu/dichvu.module';
import { DoiTacComponent } from './components/doi-tac/doi-tac.component';

@NgModule({
  declarations: [
    AppComponent,
    Nav1Component,
    Header1Component,
    HeadVideo1Component,
    Slider1Component,
    DichVuComponent,
    GioiThieu1Component,
    FooterComponent,
    GioiThieu2Component,
    HealthyFoodComponent,
    Map1Component,
    GioiThieu3Component,
    HomePageComponent,
    LienHeComponent,
    MapComponent,
    TuyenDungComponent,
    TuyendungDetailComponent,
    TintucSukienComponent,
    DoiTacComponent
  ],
  imports: [
    BrowserModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyD3T-BlBd0ZXo8nOLXjy1wI3YgOKlvDzro'
    }),
    DichvuModule,
    AppRoutingModule
  ],
  providers: [AppService],
  bootstrap: [AppComponent]
})
export class AppModule { }
