import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PartenairesRegionalComponent } from './partenaires-regional.component';

describe('PartenairesRegionalComponent', () => {
  let component: PartenairesRegionalComponent;
  let fixture: ComponentFixture<PartenairesRegionalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PartenairesRegionalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PartenairesRegionalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
