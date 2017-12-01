import { Component, OnInit, AfterViewInit } from '@angular/core';
declare var jssor_1_slider_init: any;
@Component({
  selector: 'app-gioi-thieu3',
  templateUrl: './gioi-thieu3.component.html',
  styleUrls: ['./gioi-thieu3.component.css']
})
export class GioiThieu3Component implements OnInit, AfterViewInit {

  constructor() { }

  ngOnInit() {
  };

  ngAfterViewInit() {
    jssor_1_slider_init();
  }
}
