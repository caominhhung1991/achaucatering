import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BtnLienheComponent } from './btn-lienhe.component';

describe('BtnLienheComponent', () => {
  let component: BtnLienheComponent;
  let fixture: ComponentFixture<BtnLienheComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BtnLienheComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BtnLienheComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
