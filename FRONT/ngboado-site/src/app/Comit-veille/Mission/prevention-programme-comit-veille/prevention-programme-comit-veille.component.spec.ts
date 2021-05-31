import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PreventionProgrammeComitVeilleComponent } from './prevention-programme-comit-veille.component';

describe('PreventionProgrammeComitVeilleComponent', () => {
  let component: PreventionProgrammeComitVeilleComponent;
  let fixture: ComponentFixture<PreventionProgrammeComitVeilleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PreventionProgrammeComitVeilleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PreventionProgrammeComitVeilleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
