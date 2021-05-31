import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FondSousRegionalComponent } from './fond-sous-regional.component';

describe('FondSousRegionalComponent', () => {
  let component: FondSousRegionalComponent;
  let fixture: ComponentFixture<FondSousRegionalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FondSousRegionalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FondSousRegionalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
