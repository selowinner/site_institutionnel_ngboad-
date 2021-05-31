import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContinentAccueilComponent } from './continent-accueil.component';

describe('ContinentAccueilComponent', () => {
  let component: ContinentAccueilComponent;
  let fixture: ComponentFixture<ContinentAccueilComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContinentAccueilComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ContinentAccueilComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
