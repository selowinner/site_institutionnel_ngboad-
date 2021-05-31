import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReinsertionProgrammeDistrictComponent } from './reinsertion-programme-district.component';

describe('ReinsertionProgrammeDistrictComponent', () => {
  let component: ReinsertionProgrammeDistrictComponent;
  let fixture: ComponentFixture<ReinsertionProgrammeDistrictComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReinsertionProgrammeDistrictComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReinsertionProgrammeDistrictComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
