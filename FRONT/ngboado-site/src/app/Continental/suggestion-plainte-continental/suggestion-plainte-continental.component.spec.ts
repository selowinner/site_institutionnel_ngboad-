import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SuggestionPlainteContinentalComponent } from './suggestion-plainte-continental.component';

describe('SuggestionPlainteContinentalComponent', () => {
  let component: SuggestionPlainteContinentalComponent;
  let fixture: ComponentFixture<SuggestionPlainteContinentalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SuggestionPlainteContinentalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SuggestionPlainteContinentalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
