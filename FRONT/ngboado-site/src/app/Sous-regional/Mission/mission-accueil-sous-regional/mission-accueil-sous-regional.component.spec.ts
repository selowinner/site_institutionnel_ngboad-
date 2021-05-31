import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MissionAccueilSousRegionalComponent } from './mission-accueil-sous-regional.component';

describe('MissionAccueilSousRegionalComponent', () => {
  let component: MissionAccueilSousRegionalComponent;
  let fixture: ComponentFixture<MissionAccueilSousRegionalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MissionAccueilSousRegionalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MissionAccueilSousRegionalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
