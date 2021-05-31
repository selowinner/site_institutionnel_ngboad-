import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AssistanceProjetSousRegionalComponent } from './assistance-projet-sous-regional.component';

describe('AssistanceProjetSousRegionalComponent', () => {
  let component: AssistanceProjetSousRegionalComponent;
  let fixture: ComponentFixture<AssistanceProjetSousRegionalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AssistanceProjetSousRegionalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AssistanceProjetSousRegionalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
