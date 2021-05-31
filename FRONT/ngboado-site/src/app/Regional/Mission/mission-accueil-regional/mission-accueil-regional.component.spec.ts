import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MissionAccueilRegionalComponent } from './mission-accueil-regional.component';

describe('MissionAccueilRegionalComponent', () => {
  let component: MissionAccueilRegionalComponent;
  let fixture: ComponentFixture<MissionAccueilRegionalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MissionAccueilRegionalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MissionAccueilRegionalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
