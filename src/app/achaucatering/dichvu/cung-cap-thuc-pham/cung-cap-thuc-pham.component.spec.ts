import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CungCapThucPhamComponent } from './cung-cap-thuc-pham.component';

describe('CungCapThucPhamComponent', () => {
  let component: CungCapThucPhamComponent;
  let fixture: ComponentFixture<CungCapThucPhamComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CungCapThucPhamComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CungCapThucPhamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
