import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReinsertionProgrammeContinentalComponent } from './reinsertion-programme-continental.component';

describe('ReinsertionProgrammeContinentalComponent', () => {
  let component: ReinsertionProgrammeContinentalComponent;
  let fixture: ComponentFixture<ReinsertionProgrammeContinentalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReinsertionProgrammeContinentalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReinsertionProgrammeContinentalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
