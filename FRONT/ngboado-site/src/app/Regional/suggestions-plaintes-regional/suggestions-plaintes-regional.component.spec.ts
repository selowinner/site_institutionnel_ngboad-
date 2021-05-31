import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SuggestionsPlaintesRegionalComponent } from './suggestions-plaintes-regional.component';

describe('SuggestionsPlaintesRegionalComponent', () => {
  let component: SuggestionsPlaintesRegionalComponent;
  let fixture: ComponentFixture<SuggestionsPlaintesRegionalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SuggestionsPlaintesRegionalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SuggestionsPlaintesRegionalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
