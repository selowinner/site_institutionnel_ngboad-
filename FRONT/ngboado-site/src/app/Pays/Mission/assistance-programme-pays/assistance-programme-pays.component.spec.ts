import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AssistanceProgrammePaysComponent } from './assistance-programme-pays.component';

describe('AssistanceProgrammePaysComponent', () => {
  let component: AssistanceProgrammePaysComponent;
  let fixture: ComponentFixture<AssistanceProgrammePaysComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AssistanceProgrammePaysComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AssistanceProgrammePaysComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
