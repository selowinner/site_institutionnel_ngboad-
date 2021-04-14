import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReinsertionProgrammeComponent } from './reinsertion-programme.component';

describe('ReinsertionProgrammeComponent', () => {
  let component: ReinsertionProgrammeComponent;
  let fixture: ComponentFixture<ReinsertionProgrammeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReinsertionProgrammeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReinsertionProgrammeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
