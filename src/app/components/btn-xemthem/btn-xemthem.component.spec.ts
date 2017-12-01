import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BtnXemthemComponent } from './btn-xemthem.component';

describe('BtnXemthemComponent', () => {
  let component: BtnXemthemComponent;
  let fixture: ComponentFixture<BtnXemthemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BtnXemthemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BtnXemthemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
