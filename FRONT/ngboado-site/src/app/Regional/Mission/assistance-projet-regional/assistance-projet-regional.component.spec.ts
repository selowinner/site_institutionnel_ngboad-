import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AssistanceProjetRegionalComponent } from './assistance-projet-regional.component';

describe('AssistanceProjetRegionalComponent', () => {
  let component: AssistanceProjetRegionalComponent;
  let fixture: ComponentFixture<AssistanceProjetRegionalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AssistanceProjetRegionalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AssistanceProjetRegionalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
