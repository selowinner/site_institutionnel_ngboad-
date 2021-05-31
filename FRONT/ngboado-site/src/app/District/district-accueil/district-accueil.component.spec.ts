import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DistrictAccueilComponent } from './district-accueil.component';

describe('DistrictAccueilComponent', () => {
  let component: DistrictAccueilComponent;
  let fixture: ComponentFixture<DistrictAccueilComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DistrictAccueilComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DistrictAccueilComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
