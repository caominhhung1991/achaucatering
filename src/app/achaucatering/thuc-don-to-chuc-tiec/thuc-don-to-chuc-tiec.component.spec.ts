import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ThucDonToChucTiecComponent } from './thuc-don-to-chuc-tiec.component';

describe('ThucDonToChucTiecComponent', () => {
  let component: ThucDonToChucTiecComponent;
  let fixture: ComponentFixture<ThucDonToChucTiecComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ThucDonToChucTiecComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ThucDonToChucTiecComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
