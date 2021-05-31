import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgenceFondPaysComponent } from './agence-fond-pays.component';

describe('AgenceFondPaysComponent', () => {
  let component: AgenceFondPaysComponent;
  let fixture: ComponentFixture<AgenceFondPaysComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AgenceFondPaysComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AgenceFondPaysComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
