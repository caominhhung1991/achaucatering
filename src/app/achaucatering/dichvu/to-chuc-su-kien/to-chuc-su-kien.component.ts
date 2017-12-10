import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-to-chuc-su-kien',
  templateUrl: './to-chuc-su-kien.component.html',
  styleUrls: ['./../dichvu.css','./to-chuc-su-kien.component.css']
})

export class ToChucSuKienComponent implements OnInit {
  mrDuc = "Mr.Đức - 0909.16.11.44";
  hrefThucDon = "thuc-don-to-chuc-tiec";
  contentXemTD = "Xem thực đơn";

  constructor() {

  }

  ngOnInit() {

  }
}
