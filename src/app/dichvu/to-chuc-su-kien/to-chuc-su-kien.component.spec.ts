import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ToChucSuKienComponent } from './to-chuc-su-kien.component';

describe('ToChucSuKienComponent', () => {
  let component: ToChucSuKienComponent;
  let fixture: ComponentFixture<ToChucSuKienComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ToChucSuKienComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ToChucSuKienComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
