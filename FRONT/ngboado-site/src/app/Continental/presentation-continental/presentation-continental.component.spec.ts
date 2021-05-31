import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PresentationContinentalComponent } from './presentation-continental.component';

describe('PresentationContinentalComponent', () => {
  let component: PresentationContinentalComponent;
  let fixture: ComponentFixture<PresentationContinentalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PresentationContinentalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PresentationContinentalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
