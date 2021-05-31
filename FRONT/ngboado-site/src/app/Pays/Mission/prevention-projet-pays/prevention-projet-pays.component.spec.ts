import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PreventionProjetPaysComponent } from './prevention-projet-pays.component';

describe('PreventionProjetPaysComponent', () => {
  let component: PreventionProjetPaysComponent;
  let fixture: ComponentFixture<PreventionProjetPaysComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PreventionProjetPaysComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PreventionProjetPaysComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
