import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PreventionProjetSectionComponent } from './prevention-projet-section.component';

describe('PreventionProjetSectionComponent', () => {
  let component: PreventionProjetSectionComponent;
  let fixture: ComponentFixture<PreventionProjetSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PreventionProjetSectionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PreventionProjetSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
