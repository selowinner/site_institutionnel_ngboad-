import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SuggestionsPlaintesSousRegionalComponent } from './suggestions-plaintes-sous-regional.component';

describe('SuggestionsPlaintesSousRegionalComponent', () => {
  let component: SuggestionsPlaintesSousRegionalComponent;
  let fixture: ComponentFixture<SuggestionsPlaintesSousRegionalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SuggestionsPlaintesSousRegionalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SuggestionsPlaintesSousRegionalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
