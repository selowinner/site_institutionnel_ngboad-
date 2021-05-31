import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AssistanceProjetComitVeilleComponent } from './assistance-projet-comit-veille.component';

describe('AssistanceProjetComitVeilleComponent', () => {
  let component: AssistanceProjetComitVeilleComponent;
  let fixture: ComponentFixture<AssistanceProjetComitVeilleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AssistanceProjetComitVeilleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AssistanceProjetComitVeilleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
