import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SuggestionsPlaintesPaysComponent } from './suggestions-plaintes-pays.component';

describe('SuggestionsPlaintesPaysComponent', () => {
  let component: SuggestionsPlaintesPaysComponent;
  let fixture: ComponentFixture<SuggestionsPlaintesPaysComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SuggestionsPlaintesPaysComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SuggestionsPlaintesPaysComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
