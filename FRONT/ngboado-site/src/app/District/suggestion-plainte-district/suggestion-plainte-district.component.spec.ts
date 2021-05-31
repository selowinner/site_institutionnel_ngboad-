import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SuggestionPlainteDistrictComponent } from './suggestion-plainte-district.component';

describe('SuggestionPlainteDistrictComponent', () => {
  let component: SuggestionPlainteDistrictComponent;
  let fixture: ComponentFixture<SuggestionPlainteDistrictComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SuggestionPlainteDistrictComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SuggestionPlainteDistrictComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
