import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReinsertionProgrammeSectionComponent } from './reinsertion-programme-section.component';

describe('ReinsertionProgrammeSectionComponent', () => {
  let component: ReinsertionProgrammeSectionComponent;
  let fixture: ComponentFixture<ReinsertionProgrammeSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReinsertionProgrammeSectionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReinsertionProgrammeSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
