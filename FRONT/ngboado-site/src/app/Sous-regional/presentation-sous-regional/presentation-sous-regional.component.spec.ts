import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PresentationSousRegionalComponent } from './presentation-sous-regional.component';

describe('PresentationSousRegionalComponent', () => {
  let component: PresentationSousRegionalComponent;
  let fixture: ComponentFixture<PresentationSousRegionalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PresentationSousRegionalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PresentationSousRegionalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
