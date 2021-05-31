import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReinsertionProjetPaysComponent } from './reinsertion-projet-pays.component';

describe('ReinsertionProjetPaysComponent', () => {
  let component: ReinsertionProjetPaysComponent;
  let fixture: ComponentFixture<ReinsertionProjetPaysComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReinsertionProjetPaysComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReinsertionProjetPaysComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
