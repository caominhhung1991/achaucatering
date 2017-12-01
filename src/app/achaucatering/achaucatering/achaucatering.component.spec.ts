import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AchaucateringComponent } from './achaucatering.component';

describe('AchaucateringComponent', () => {
  let component: AchaucateringComponent;
  let fixture: ComponentFixture<AchaucateringComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AchaucateringComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AchaucateringComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
