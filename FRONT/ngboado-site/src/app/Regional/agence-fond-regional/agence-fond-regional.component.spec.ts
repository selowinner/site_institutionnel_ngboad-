import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgenceFondRegionalComponent } from './agence-fond-regional.component';

describe('AgenceFondRegionalComponent', () => {
  let component: AgenceFondRegionalComponent;
  let fixture: ComponentFixture<AgenceFondRegionalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AgenceFondRegionalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AgenceFondRegionalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
