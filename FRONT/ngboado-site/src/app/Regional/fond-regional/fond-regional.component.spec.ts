import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FondRegionalComponent } from './fond-regional.component';

describe('FondRegionalComponent', () => {
  let component: FondRegionalComponent;
  let fixture: ComponentFixture<FondRegionalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FondRegionalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FondRegionalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
