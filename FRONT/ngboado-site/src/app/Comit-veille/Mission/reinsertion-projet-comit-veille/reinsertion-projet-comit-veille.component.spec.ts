import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReinsertionProjetComitVeilleComponent } from './reinsertion-projet-comit-veille.component';

describe('ReinsertionProjetComitVeilleComponent', () => {
  let component: ReinsertionProjetComitVeilleComponent;
  let fixture: ComponentFixture<ReinsertionProjetComitVeilleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReinsertionProjetComitVeilleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReinsertionProjetComitVeilleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
