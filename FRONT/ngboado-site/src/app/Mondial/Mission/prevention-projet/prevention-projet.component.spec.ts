import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PreventionProjetComponent } from './prevention-projet.component';

describe('PreventionProjetComponent', () => {
  let component: PreventionProjetComponent;
  let fixture: ComponentFixture<PreventionProjetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PreventionProjetComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PreventionProjetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
