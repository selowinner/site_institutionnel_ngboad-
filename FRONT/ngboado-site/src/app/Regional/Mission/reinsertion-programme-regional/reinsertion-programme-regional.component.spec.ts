import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReinsertionProgrammeRegionalComponent } from './reinsertion-programme-regional.component';

describe('ReinsertionProgrammeRegionalComponent', () => {
  let component: ReinsertionProgrammeRegionalComponent;
  let fixture: ComponentFixture<ReinsertionProgrammeRegionalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReinsertionProgrammeRegionalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReinsertionProgrammeRegionalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
