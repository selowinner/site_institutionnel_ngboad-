import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AssistanceProgrammeDistrictComponent } from './assistance-programme-district.component';

describe('AssistanceProgrammeDistrictComponent', () => {
  let component: AssistanceProgrammeDistrictComponent;
  let fixture: ComponentFixture<AssistanceProgrammeDistrictComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AssistanceProgrammeDistrictComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AssistanceProgrammeDistrictComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
