import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PresentationComitVeilleComponent } from './presentation-comit-veille.component';

describe('PresentationComitVeilleComponent', () => {
  let component: PresentationComitVeilleComponent;
  let fixture: ComponentFixture<PresentationComitVeilleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PresentationComitVeilleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PresentationComitVeilleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
