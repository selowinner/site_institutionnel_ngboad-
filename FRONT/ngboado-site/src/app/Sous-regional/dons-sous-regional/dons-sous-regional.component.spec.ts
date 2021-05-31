import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DonsSousRegionalComponent } from './dons-sous-regional.component';

describe('DonsSousRegionalComponent', () => {
  let component: DonsSousRegionalComponent;
  let fixture: ComponentFixture<DonsSousRegionalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DonsSousRegionalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DonsSousRegionalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
