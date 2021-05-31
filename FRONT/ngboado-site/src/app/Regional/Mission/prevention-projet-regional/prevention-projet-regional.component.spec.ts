import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PreventionProjetRegionalComponent } from './prevention-projet-regional.component';

describe('PreventionProjetRegionalComponent', () => {
  let component: PreventionProjetRegionalComponent;
  let fixture: ComponentFixture<PreventionProjetRegionalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PreventionProjetRegionalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PreventionProjetRegionalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
