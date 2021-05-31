import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComitVeilleAccueilComponent } from './comit-veille-accueil.component';

describe('ComitVeilleAccueilComponent', () => {
  let component: ComitVeilleAccueilComponent;
  let fixture: ComponentFixture<ComitVeilleAccueilComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ComitVeilleAccueilComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ComitVeilleAccueilComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
