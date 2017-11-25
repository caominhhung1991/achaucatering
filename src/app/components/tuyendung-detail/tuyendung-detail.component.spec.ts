import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TuyendungDetailComponent } from './tuyendung-detail.component';

describe('TuyendungDetailComponent', () => {
  let component: TuyendungDetailComponent;
  let fixture: ComponentFixture<TuyendungDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TuyendungDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TuyendungDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
