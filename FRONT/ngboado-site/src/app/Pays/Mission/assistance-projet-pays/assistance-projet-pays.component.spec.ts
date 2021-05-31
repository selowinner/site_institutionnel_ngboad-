import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AssistanceProjetPaysComponent } from './assistance-projet-pays.component';

describe('AssistanceProjetPaysComponent', () => {
  let component: AssistanceProjetPaysComponent;
  let fixture: ComponentFixture<AssistanceProjetPaysComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AssistanceProjetPaysComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AssistanceProjetPaysComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
