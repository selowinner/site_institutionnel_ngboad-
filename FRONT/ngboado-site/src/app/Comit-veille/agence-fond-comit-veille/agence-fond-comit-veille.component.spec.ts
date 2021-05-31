import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgenceFondComitVeilleComponent } from './agence-fond-comit-veille.component';

describe('AgenceFondComitVeilleComponent', () => {
  let component: AgenceFondComitVeilleComponent;
  let fixture: ComponentFixture<AgenceFondComitVeilleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AgenceFondComitVeilleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AgenceFondComitVeilleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
