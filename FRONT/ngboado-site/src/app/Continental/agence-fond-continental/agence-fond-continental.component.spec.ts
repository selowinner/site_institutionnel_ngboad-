import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgenceFondContinentalComponent } from './agence-fond-continental.component';

describe('AgenceFondContinentalComponent', () => {
  let component: AgenceFondContinentalComponent;
  let fixture: ComponentFixture<AgenceFondContinentalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AgenceFondContinentalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AgenceFondContinentalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
