import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReinsertionProjetSousRegionalComponent } from './reinsertion-projet-sous-regional.component';

describe('ReinsertionProjetSousRegionalComponent', () => {
  let component: ReinsertionProjetSousRegionalComponent;
  let fixture: ComponentFixture<ReinsertionProjetSousRegionalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReinsertionProjetSousRegionalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReinsertionProjetSousRegionalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
