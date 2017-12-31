import { Component, OnInit } from '@angular/core';
import { AppService } from '../../../services/app.service';

@Component({
  selector: 'app-to-chuc-su-kien',
  templateUrl: './to-chuc-su-kien.component.html',
  styleUrls: ['./../dichvu.css','./to-chuc-su-kien.component.css']
})

export class ToChucSuKienComponent implements OnInit {
  mrDuc = "Mr.Đức - 0909.16.11.44";
  hrefThucDon = "/dich-vu/thuc-don-to-chuc-tiec";
  contentXemTD = "Xem thực đơn";

  constructor(
    private appService: AppService
  ) {

  }

  ngOnInit() {
    this.appService.gotoTop(0);
  }
}
