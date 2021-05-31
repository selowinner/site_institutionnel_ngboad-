import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegionalAccueilComponent } from './regional-accueil.component';

describe('RegionalAccueilComponent', () => {
  let component: RegionalAccueilComponent;
  let fixture: ComponentFixture<RegionalAccueilComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegionalAccueilComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RegionalAccueilComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
