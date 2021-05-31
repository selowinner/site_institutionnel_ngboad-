import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PreventionProgrammeSectionComponent } from './prevention-programme-section.component';

describe('PreventionProgrammeSectionComponent', () => {
  let component: PreventionProgrammeSectionComponent;
  let fixture: ComponentFixture<PreventionProgrammeSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PreventionProgrammeSectionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PreventionProgrammeSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
