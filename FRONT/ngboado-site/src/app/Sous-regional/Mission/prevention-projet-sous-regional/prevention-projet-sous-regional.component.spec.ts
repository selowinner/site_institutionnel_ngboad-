import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PreventionProjetSousRegionalComponent } from './prevention-projet-sous-regional.component';

describe('PreventionProjetSousRegionalComponent', () => {
  let component: PreventionProjetSousRegionalComponent;
  let fixture: ComponentFixture<PreventionProjetSousRegionalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PreventionProjetSousRegionalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PreventionProjetSousRegionalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
