import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReinsertionProgrammeComitVeilleComponent } from './reinsertion-programme-comit-veille.component';

describe('ReinsertionProgrammeComitVeilleComponent', () => {
  let component: ReinsertionProgrammeComitVeilleComponent;
  let fixture: ComponentFixture<ReinsertionProgrammeComitVeilleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReinsertionProgrammeComitVeilleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReinsertionProgrammeComitVeilleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
