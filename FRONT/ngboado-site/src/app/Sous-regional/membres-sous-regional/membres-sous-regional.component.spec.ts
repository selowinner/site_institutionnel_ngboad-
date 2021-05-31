import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MembresSousRegionalComponent } from './membres-sous-regional.component';

describe('MembresSousRegionalComponent', () => {
  let component: MembresSousRegionalComponent;
  let fixture: ComponentFixture<MembresSousRegionalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MembresSousRegionalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MembresSousRegionalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
