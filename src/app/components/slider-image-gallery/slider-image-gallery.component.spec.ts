import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SliderImageGalleryComponent } from './slider-image-gallery.component';

describe('SliderImageGalleryComponent', () => {
  let component: SliderImageGalleryComponent;
  let fixture: ComponentFixture<SliderImageGalleryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SliderImageGalleryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SliderImageGalleryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
