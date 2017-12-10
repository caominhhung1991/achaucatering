import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DichvuRoutingModule } from './dichvu-routing.module';
import { DichvuService } from './dichvu.service';
import { CungCapThucPhamComponent } from './cung-cap-thuc-pham/cung-cap-thuc-pham.component';
import { QuayDichVuTienIchComponent } from './quay-dich-vu-tien-ich/quay-dich-vu-tien-ich.component';
import { ToChucSuKienComponent } from './to-chuc-su-kien/to-chuc-su-kien.component';
import { TuVanThietKeComponent } from './tu-van-thiet-ke/tu-van-thiet-ke.component';
import { ChuoiNhaThuocComponent } from './chuoi-nha-thuoc/chuoi-nha-thuoc.component';
import { NoContentComponent } from './no-content/no-content.component';
import { AchaucateringModule } from '../achaucatering.module';
import { ComponentModule } from '../../components/component.module';

@NgModule({
  imports: [
    CommonModule,
    DichvuRoutingModule,
    ComponentModule
  ],
  declarations: [
    CungCapThucPhamComponent, 
    QuayDichVuTienIchComponent, 
    ToChucSuKienComponent, 
    TuVanThietKeComponent, 
    ChuoiNhaThuocComponent,
    NoContentComponent
  ],
  providers: [ DichvuService ]
})
export class DichvuModule { }
