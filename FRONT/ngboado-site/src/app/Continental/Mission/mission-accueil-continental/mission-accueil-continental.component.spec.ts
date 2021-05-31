import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MissionAccueilContinentalComponent } from './mission-accueil-continental.component';

describe('MissionAccueilContinentalComponent', () => {
  let component: MissionAccueilContinentalComponent;
  let fixture: ComponentFixture<MissionAccueilContinentalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MissionAccueilContinentalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MissionAccueilContinentalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
