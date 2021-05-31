import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaysAccueilComponent } from './pays-accueil.component';

describe('PaysAccueilComponent', () => {
  let component: PaysAccueilComponent;
  let fixture: ComponentFixture<PaysAccueilComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PaysAccueilComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PaysAccueilComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
