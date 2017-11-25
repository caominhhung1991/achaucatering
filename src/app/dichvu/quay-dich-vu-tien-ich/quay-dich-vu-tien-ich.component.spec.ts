import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QuayDichVuTienIchComponent } from './quay-dich-vu-tien-ich.component';

describe('QuayDichVuTienIchComponent', () => {
  let component: QuayDichVuTienIchComponent;
  let fixture: ComponentFixture<QuayDichVuTienIchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuayDichVuTienIchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuayDichVuTienIchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
