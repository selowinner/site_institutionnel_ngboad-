import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SuggestionsPlaintesComitVeilleComponent } from './suggestions-plaintes-comit-veille.component';

describe('SuggestionsPlaintesComitVeilleComponent', () => {
  let component: SuggestionsPlaintesComitVeilleComponent;
  let fixture: ComponentFixture<SuggestionsPlaintesComitVeilleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SuggestionsPlaintesComitVeilleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SuggestionsPlaintesComitVeilleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
