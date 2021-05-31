import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DonsContinentalComponent } from './dons-continental.component';

describe('DonsContinentalComponent', () => {
  let component: DonsContinentalComponent;
  let fixture: ComponentFixture<DonsContinentalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DonsContinentalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DonsContinentalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
