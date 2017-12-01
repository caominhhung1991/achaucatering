import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { DichvuModule } from './achaucatering/dichvu/dichvu.module';
import { AchaucateringModule } from './achaucatering/achaucatering.module';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { AppService } from './services/app.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AchaucateringModule,
    AppRoutingModule
  ],
  providers: [ AppService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
