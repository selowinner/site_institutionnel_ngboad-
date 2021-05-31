import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MissionAccueilComitVeilleComponent } from './mission-accueil-comit-veille.component';

describe('MissionAccueilComitVeilleComponent', () => {
  let component: MissionAccueilComitVeilleComponent;
  let fixture: ComponentFixture<MissionAccueilComitVeilleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MissionAccueilComitVeilleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MissionAccueilComitVeilleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
