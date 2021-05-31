import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PreventionProgrammePaysComponent } from './prevention-programme-pays.component';

describe('PreventionProgrammePaysComponent', () => {
  let component: PreventionProgrammePaysComponent;
  let fixture: ComponentFixture<PreventionProgrammePaysComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PreventionProgrammePaysComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PreventionProgrammePaysComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
