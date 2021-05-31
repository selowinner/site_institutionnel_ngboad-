import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PartenairesSousRegionalComponent } from './partenaires-sous-regional.component';

describe('PartenairesSousRegionalComponent', () => {
  let component: PartenairesSousRegionalComponent;
  let fixture: ComponentFixture<PartenairesSousRegionalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PartenairesSousRegionalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PartenairesSousRegionalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
