import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReinsertionProjetRegionalComponent } from './reinsertion-projet-regional.component';

describe('ReinsertionProjetRegionalComponent', () => {
  let component: ReinsertionProjetRegionalComponent;
  let fixture: ComponentFixture<ReinsertionProjetRegionalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReinsertionProjetRegionalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReinsertionProjetRegionalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
