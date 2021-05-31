import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AssistanceProjetSectionComponent } from './assistance-projet-section.component';

describe('AssistanceProjetSectionComponent', () => {
  let component: AssistanceProjetSectionComponent;
  let fixture: ComponentFixture<AssistanceProjetSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AssistanceProjetSectionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AssistanceProjetSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
