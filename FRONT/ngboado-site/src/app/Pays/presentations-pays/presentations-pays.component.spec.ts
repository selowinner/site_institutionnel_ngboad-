import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PresentationsPaysComponent } from './presentations-pays.component';

describe('PresentationsPaysComponent', () => {
  let component: PresentationsPaysComponent;
  let fixture: ComponentFixture<PresentationsPaysComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PresentationsPaysComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PresentationsPaysComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
