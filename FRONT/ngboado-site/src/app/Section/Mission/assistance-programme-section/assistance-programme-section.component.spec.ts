import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AssistanceProgrammeSectionComponent } from './assistance-programme-section.component';

describe('AssistanceProgrammeSectionComponent', () => {
  let component: AssistanceProgrammeSectionComponent;
  let fixture: ComponentFixture<AssistanceProgrammeSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AssistanceProgrammeSectionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AssistanceProgrammeSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
