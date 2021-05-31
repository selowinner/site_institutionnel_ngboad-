import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AssistanceProgrammeRegionalComponent } from './assistance-programme-regional.component';

describe('AssistanceProgrammeRegionalComponent', () => {
  let component: AssistanceProgrammeRegionalComponent;
  let fixture: ComponentFixture<AssistanceProgrammeRegionalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AssistanceProgrammeRegionalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AssistanceProgrammeRegionalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
