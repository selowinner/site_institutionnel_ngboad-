import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgenceSousRegionalComponent } from './agence-sous-regional.component';

describe('AgenceSousRegionalComponent', () => {
  let component: AgenceSousRegionalComponent;
  let fixture: ComponentFixture<AgenceSousRegionalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AgenceSousRegionalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AgenceSousRegionalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
