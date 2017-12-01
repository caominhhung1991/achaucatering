import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { SuatAnCongNghiepComponent } from './suat-an-cong-nghiep/suat-an-cong-nghiep.component';
import { CungCapThucPhamComponent } from './cung-cap-thuc-pham/cung-cap-thuc-pham.component';
import { QuayDichVuTienIchComponent } from './quay-dich-vu-tien-ich/quay-dich-vu-tien-ich.component';
import { ChuoiNhaThuocComponent } from './chuoi-nha-thuoc/chuoi-nha-thuoc.component';
import { ToChucSuKienComponent } from './to-chuc-su-kien/to-chuc-su-kien.component';
import { TuVanThietKeComponent } from './tu-van-thiet-ke/tu-van-thiet-ke.component';

const dichvuRoutes: Routes = [

]

@NgModule({
  imports: [
    RouterModule.forChild(dichvuRoutes)
  ],
  declarations: [],
  exports: [
    RouterModule
  ]
})
export class DichvuRoutingModule { }
