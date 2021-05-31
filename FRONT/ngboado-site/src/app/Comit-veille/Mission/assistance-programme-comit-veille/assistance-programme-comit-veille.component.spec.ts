import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AssistanceProgrammeComitVeilleComponent } from './assistance-programme-comit-veille.component';

describe('AssistanceProgrammeComitVeilleComponent', () => {
  let component: AssistanceProgrammeComitVeilleComponent;
  let fixture: ComponentFixture<AssistanceProgrammeComitVeilleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AssistanceProgrammeComitVeilleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AssistanceProgrammeComitVeilleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
