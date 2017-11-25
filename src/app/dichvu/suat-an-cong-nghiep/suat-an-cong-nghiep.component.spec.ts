import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SuatAnCongNghiepComponent } from './suat-an-cong-nghiep.component';

describe('SuatAnCongNghiepComponent', () => {
  let component: SuatAnCongNghiepComponent;
  let fixture: ComponentFixture<SuatAnCongNghiepComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SuatAnCongNghiepComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SuatAnCongNghiepComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
