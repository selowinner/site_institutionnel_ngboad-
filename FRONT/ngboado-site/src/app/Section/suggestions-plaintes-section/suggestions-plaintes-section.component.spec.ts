import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SuggestionsPlaintesSectionComponent } from './suggestions-plaintes-section.component';

describe('SuggestionsPlaintesSectionComponent', () => {
  let component: SuggestionsPlaintesSectionComponent;
  let fixture: ComponentFixture<SuggestionsPlaintesSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SuggestionsPlaintesSectionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SuggestionsPlaintesSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
