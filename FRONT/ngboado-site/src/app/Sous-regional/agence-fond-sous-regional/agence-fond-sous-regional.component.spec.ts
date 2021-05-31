import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgenceFondSousRegionalComponent } from './agence-fond-sous-regional.component';

describe('AgenceFondSousRegionalComponent', () => {
  let component: AgenceFondSousRegionalComponent;
  let fixture: ComponentFixture<AgenceFondSousRegionalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AgenceFondSousRegionalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AgenceFondSousRegionalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
