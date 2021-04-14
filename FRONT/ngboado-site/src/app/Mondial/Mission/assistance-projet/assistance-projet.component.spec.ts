import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AssistanceProjetComponent } from './assistance-projet.component';

describe('AssistanceProjetComponent', () => {
  let component: AssistanceProjetComponent;
  let fixture: ComponentFixture<AssistanceProjetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AssistanceProjetComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AssistanceProjetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
