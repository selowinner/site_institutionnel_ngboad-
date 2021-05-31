import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MissionAccueilSectionComponent } from './mission-accueil-section.component';

describe('MissionAccueilSectionComponent', () => {
  let component: MissionAccueilSectionComponent;
  let fixture: ComponentFixture<MissionAccueilSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MissionAccueilSectionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MissionAccueilSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
