import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SousRegionalAccueilComponent } from './sous-regional-accueil.component';

describe('SousRegionalAccueilComponent', () => {
  let component: SousRegionalAccueilComponent;
  let fixture: ComponentFixture<SousRegionalAccueilComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SousRegionalAccueilComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SousRegionalAccueilComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
