import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AssistanceProgrammeComponent } from './assistance-programme.component';

describe('AssistanceProgrammeComponent', () => {
  let component: AssistanceProgrammeComponent;
  let fixture: ComponentFixture<AssistanceProgrammeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AssistanceProgrammeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AssistanceProgrammeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
