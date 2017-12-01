import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TuVanThietKeComponent } from './tu-van-thiet-ke.component';

describe('TuVanThietKeComponent', () => {
  let component: TuVanThietKeComponent;
  let fixture: ComponentFixture<TuVanThietKeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TuVanThietKeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TuVanThietKeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
