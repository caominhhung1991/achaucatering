import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TintucSukienComponent } from './tintuc-sukien.component';

describe('TintucSukienComponent', () => {
  let component: TintucSukienComponent;
  let fixture: ComponentFixture<TintucSukienComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TintucSukienComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TintucSukienComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
