import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MembresContinentalComponent } from './membres-continental.component';

describe('MembresContinentalComponent', () => {
  let component: MembresContinentalComponent;
  let fixture: ComponentFixture<MembresContinentalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MembresContinentalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MembresContinentalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
