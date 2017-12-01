import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GioiThieu3Component } from './gioi-thieu3.component';

describe('GioiThieu3Component', () => {
  let component: GioiThieu3Component;
  let fixture: ComponentFixture<GioiThieu3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GioiThieu3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GioiThieu3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
