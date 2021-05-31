import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgenceRegionalComponent } from './agence-regional.component';

describe('AgenceRegionalComponent', () => {
  let component: AgenceRegionalComponent;
  let fixture: ComponentFixture<AgenceRegionalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AgenceRegionalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AgenceRegionalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
