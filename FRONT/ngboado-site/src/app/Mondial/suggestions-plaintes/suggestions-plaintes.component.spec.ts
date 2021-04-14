import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SuggestionsPlaintesComponent } from './suggestions-plaintes.component';

describe('SuggestionsPlaintesComponent', () => {
  let component: SuggestionsPlaintesComponent;
  let fixture: ComponentFixture<SuggestionsPlaintesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SuggestionsPlaintesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SuggestionsPlaintesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
