import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PreventionProgrammeSousRegionalComponent } from './prevention-programme-sous-regional.component';

describe('PreventionProgrammeSousRegionalComponent', () => {
  let component: PreventionProgrammeSousRegionalComponent;
  let fixture: ComponentFixture<PreventionProgrammeSousRegionalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PreventionProgrammeSousRegionalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PreventionProgrammeSousRegionalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
