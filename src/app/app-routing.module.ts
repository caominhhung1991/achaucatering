import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { HomePageComponent } from './components/home-page/home-page.component';
import { LienHeComponent } from './components/chi-tiet/lien-he/lien-he.component';
const appRoutes: Routes = [
  { path: '', component: HomePageComponent },
  { path: 'lien-he', component: LienHeComponent},
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
