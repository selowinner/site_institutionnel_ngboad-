import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PreventionProgrammeComponent } from './prevention-programme.component';

describe('PreventionProgrammeComponent', () => {
  let component: PreventionProgrammeComponent;
  let fixture: ComponentFixture<PreventionProgrammeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PreventionProgrammeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PreventionProgrammeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
