import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PresentationRegionalComponent } from './presentation-regional.component';

describe('PresentationRegionalComponent', () => {
  let component: PresentationRegionalComponent;
  let fixture: ComponentFixture<PresentationRegionalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PresentationRegionalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PresentationRegionalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
