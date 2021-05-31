import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PreventionProjetComitVeilleComponent } from './prevention-projet-comit-veille.component';

describe('PreventionProjetComitVeilleComponent', () => {
  let component: PreventionProjetComitVeilleComponent;
  let fixture: ComponentFixture<PreventionProjetComitVeilleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PreventionProjetComitVeilleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PreventionProjetComitVeilleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
