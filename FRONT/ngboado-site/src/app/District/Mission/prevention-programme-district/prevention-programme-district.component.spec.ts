import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PreventionProgrammeDistrictComponent } from './prevention-programme-district.component';

describe('PreventionProgrammeDistrictComponent', () => {
  let component: PreventionProgrammeDistrictComponent;
  let fixture: ComponentFixture<PreventionProgrammeDistrictComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PreventionProgrammeDistrictComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PreventionProgrammeDistrictComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
