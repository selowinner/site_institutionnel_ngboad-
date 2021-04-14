import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgenceFondComponent } from './agence-fond.component';

describe('AgenceFondComponent', () => {
  let component: AgenceFondComponent;
  let fixture: ComponentFixture<AgenceFondComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AgenceFondComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AgenceFondComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
