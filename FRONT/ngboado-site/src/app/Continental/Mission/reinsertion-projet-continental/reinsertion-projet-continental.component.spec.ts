import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReinsertionProjetContinentalComponent } from './reinsertion-projet-continental.component';

describe('ReinsertionProjetContinentalComponent', () => {
  let component: ReinsertionProjetContinentalComponent;
  let fixture: ComponentFixture<ReinsertionProjetContinentalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReinsertionProjetContinentalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReinsertionProjetContinentalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
