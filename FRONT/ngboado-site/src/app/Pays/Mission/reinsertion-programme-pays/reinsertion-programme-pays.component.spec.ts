import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReinsertionProgrammePaysComponent } from './reinsertion-programme-pays.component';

describe('ReinsertionProgrammePaysComponent', () => {
  let component: ReinsertionProgrammePaysComponent;
  let fixture: ComponentFixture<ReinsertionProgrammePaysComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReinsertionProgrammePaysComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReinsertionProgrammePaysComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
