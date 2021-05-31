import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgenceContinentalComponent } from './agence-continental.component';

describe('AgenceContinentalComponent', () => {
  let component: AgenceContinentalComponent;
  let fixture: ComponentFixture<AgenceContinentalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AgenceContinentalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AgenceContinentalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
