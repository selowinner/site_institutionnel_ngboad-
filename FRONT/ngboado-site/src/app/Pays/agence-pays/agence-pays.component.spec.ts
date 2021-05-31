import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgencePaysComponent } from './agence-pays.component';

describe('AgencePaysComponent', () => {
  let component: AgencePaysComponent;
  let fixture: ComponentFixture<AgencePaysComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AgencePaysComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AgencePaysComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
