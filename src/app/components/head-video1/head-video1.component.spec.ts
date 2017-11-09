import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeadVideo1Component } from './head-video1.component';

describe('HeadVideo1Component', () => {
  let component: HeadVideo1Component;
  let fixture: ComponentFixture<HeadVideo1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeadVideo1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeadVideo1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
