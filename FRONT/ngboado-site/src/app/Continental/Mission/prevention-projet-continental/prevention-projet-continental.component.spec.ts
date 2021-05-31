import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PreventionProjetContinentalComponent } from './prevention-projet-continental.component';

describe('PreventionProjetContinentalComponent', () => {
  let component: PreventionProjetContinentalComponent;
  let fixture: ComponentFixture<PreventionProjetContinentalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PreventionProjetContinentalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PreventionProjetContinentalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
