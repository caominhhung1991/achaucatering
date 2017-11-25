import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChuoiNhaThuocComponent } from './chuoi-nha-thuoc.component';

describe('ChuoiNhaThuocComponent', () => {
  let component: ChuoiNhaThuocComponent;
  let fixture: ComponentFixture<ChuoiNhaThuocComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChuoiNhaThuocComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChuoiNhaThuocComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
