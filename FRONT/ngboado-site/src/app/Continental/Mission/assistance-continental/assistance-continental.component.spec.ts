import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AssistanceContinentalComponent } from './assistance-continental.component';

describe('AssistanceContinentalComponent', () => {
  let component: AssistanceContinentalComponent;
  let fixture: ComponentFixture<AssistanceContinentalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AssistanceContinentalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AssistanceContinentalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
