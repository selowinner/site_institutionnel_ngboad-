import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FondContinentalComponent } from './fond-continental.component';

describe('FondContinentalComponent', () => {
  let component: FondContinentalComponent;
  let fixture: ComponentFixture<FondContinentalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FondContinentalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FondContinentalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
