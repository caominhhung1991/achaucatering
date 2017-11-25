import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { HomePageComponent } from './components/home-page/home-page.component';
import { LienHeComponent } from './components/chi-tiet/lien-he/lien-he.component';
import { TuyenDungComponent } from './components/tuyen-dung/tuyen-dung.component';
import { TuyendungDetailComponent } from './components/tuyendung-detail/tuyendung-detail.component';
const appRoutes: Routes = [
  { path: '', component: HomePageComponent },
  { path: 'lien-he', component: LienHeComponent},
  { path: 'tuyen-dung', component: TuyenDungComponent},
  { path: 'tuyen-dung/:id', component: TuyendungDetailComponent},
  { path: '**', component: HomePageComponent }
]
@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(appRoutes)
  ],
  declarations: [],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
