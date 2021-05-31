import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgenceFondSectionComponent } from './agence-fond-section.component';

describe('AgenceFondSectionComponent', () => {
  let component: AgenceFondSectionComponent;
  let fixture: ComponentFixture<AgenceFondSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AgenceFondSectionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AgenceFondSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
