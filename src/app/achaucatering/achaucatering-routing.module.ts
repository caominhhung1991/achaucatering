import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import { AchaucateringComponent } from './achaucatering/achaucatering.component';
import { SuatAnCongNghiepComponent } from './dichvu/suat-an-cong-nghiep/suat-an-cong-nghiep.component';
import { CungCapThucPhamComponent } from './dichvu/cung-cap-thuc-pham/cung-cap-thuc-pham.component';
import { QuayDichVuTienIchComponent } from './dichvu/quay-dich-vu-tien-ich/quay-dich-vu-tien-ich.component';
import { ChuoiNhaThuocComponent } from './dichvu/chuoi-nha-thuoc/chuoi-nha-thuoc.component';
import { ToChucSuKienComponent } from './dichvu/to-chuc-su-kien/to-chuc-su-kien.component';
import { TuVanThietKeComponent } from './dichvu/tu-van-thiet-ke/tu-van-thiet-ke.component';
import { TintucSukienComponent } from './tintuc-sukien/tintuc-sukien.component';
import { TuyenDungComponent } from './tuyen-dung/tuyen-dung.component';
import { TuyendungDetailComponent } from './tuyendung-detail/tuyendung-detail.component';
import { GioiThieu3Component } from './gioi-thieu3/gioi-thieu3.component';
import { LienHeComponent } from './lien-he/lien-he.component';

const achauRouting: Routes = [
  {
    path: '',
    component: AchaucateringComponent,
    children: [
      { path: '', component: HomePageComponent },
      { path: 'tintuc-sukien', component: TintucSukienComponent },
      { path: 'suat-an-cong-nghiep', component: SuatAnCongNghiepComponent },
      { path: 'cung-cap-thuc-tham', component: CungCapThucPhamComponent },
      { path: 'quay-dich-vu', component: QuayDichVuTienIchComponent },
      { path: 'chuoi-nha-thuoc', component: ChuoiNhaThuocComponent },
      { path: 'to-chuc-su-kien', component: ToChucSuKienComponent },
      { path: 'tu-van-thiet-ke', component: TuVanThietKeComponent },
      { path: 'tuyen-dung', component: TuyenDungComponent },
      { path: 'tuyen-dung/:id', component: TuyendungDetailComponent },
      { path: 'slider', component: GioiThieu3Component },
      { path: 'tintuc-sukien', component: TintucSukienComponent },
      { path: 'lien-he', component: LienHeComponent },
    ]
  }
]

@NgModule({
  imports: [
    RouterModule.forChild(achauRouting)
  ],
  declarations: [],
  exports: [
    RouterModule
  ]
})
export class AchaucateringRoutingModule { }
