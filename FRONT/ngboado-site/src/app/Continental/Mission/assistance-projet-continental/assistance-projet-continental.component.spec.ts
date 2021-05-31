import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AssistanceProjetContinentalComponent } from './assistance-projet-continental.component';

describe('AssistanceProjetContinentalComponent', () => {
  let component: AssistanceProjetContinentalComponent;
  let fixture: ComponentFixture<AssistanceProjetContinentalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AssistanceProjetContinentalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AssistanceProjetContinentalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
