import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PreventionProgrammeRegionalComponent } from './prevention-programme-regional.component';

describe('PreventionProgrammeRegionalComponent', () => {
  let component: PreventionProgrammeRegionalComponent;
  let fixture: ComponentFixture<PreventionProgrammeRegionalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PreventionProgrammeRegionalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PreventionProgrammeRegionalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
