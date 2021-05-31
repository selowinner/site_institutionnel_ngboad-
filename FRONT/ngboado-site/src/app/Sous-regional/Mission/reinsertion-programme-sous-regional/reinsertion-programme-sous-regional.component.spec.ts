import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReinsertionProgrammeSousRegionalComponent } from './reinsertion-programme-sous-regional.component';

describe('ReinsertionProgrammeSousRegionalComponent', () => {
  let component: ReinsertionProgrammeSousRegionalComponent;
  let fixture: ComponentFixture<ReinsertionProgrammeSousRegionalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReinsertionProgrammeSousRegionalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReinsertionProgrammeSousRegionalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
