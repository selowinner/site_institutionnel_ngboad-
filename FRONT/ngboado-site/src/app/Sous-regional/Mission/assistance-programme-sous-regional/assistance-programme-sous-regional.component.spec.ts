import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AssistanceProgrammeSousRegionalComponent } from './assistance-programme-sous-regional.component';

describe('AssistanceProgrammeSousRegionalComponent', () => {
  let component: AssistanceProgrammeSousRegionalComponent;
  let fixture: ComponentFixture<AssistanceProgrammeSousRegionalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AssistanceProgrammeSousRegionalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AssistanceProgrammeSousRegionalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
