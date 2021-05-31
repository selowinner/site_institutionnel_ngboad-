import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MissionAccueilDistrictComponent } from './mission-accueil-district.component';

describe('MissionAccueilDistrictComponent', () => {
  let component: MissionAccueilDistrictComponent;
  let fixture: ComponentFixture<MissionAccueilDistrictComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MissionAccueilDistrictComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MissionAccueilDistrictComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
