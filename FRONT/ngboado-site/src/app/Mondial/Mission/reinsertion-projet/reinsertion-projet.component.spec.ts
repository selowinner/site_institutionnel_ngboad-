import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReinsertionProjetComponent } from './reinsertion-projet.component';

describe('ReinsertionProjetComponent', () => {
  let component: ReinsertionProjetComponent;
  let fixture: ComponentFixture<ReinsertionProjetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReinsertionProjetComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReinsertionProjetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
