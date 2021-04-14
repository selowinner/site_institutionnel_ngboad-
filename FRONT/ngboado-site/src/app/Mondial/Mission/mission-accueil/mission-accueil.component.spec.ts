import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MissionAccueilComponent } from './mission-accueil.component';

describe('MissionAccueilComponent', () => {
  let component: MissionAccueilComponent;
  let fixture: ComponentFixture<MissionAccueilComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MissionAccueilComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MissionAccueilComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
