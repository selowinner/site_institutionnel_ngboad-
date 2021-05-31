import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReinsertionProjetSectionComponent } from './reinsertion-projet-section.component';

describe('ReinsertionProjetSectionComponent', () => {
  let component: ReinsertionProjetSectionComponent;
  let fixture: ComponentFixture<ReinsertionProjetSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReinsertionProjetSectionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReinsertionProjetSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
