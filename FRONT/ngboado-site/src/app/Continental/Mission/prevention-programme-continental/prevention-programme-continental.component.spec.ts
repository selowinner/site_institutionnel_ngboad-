import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PreventionProgrammeContinentalComponent } from './prevention-programme-continental.component';

describe('PreventionProgrammeContinentalComponent', () => {
  let component: PreventionProgrammeContinentalComponent;
  let fixture: ComponentFixture<PreventionProgrammeContinentalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PreventionProgrammeContinentalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PreventionProgrammeContinentalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
