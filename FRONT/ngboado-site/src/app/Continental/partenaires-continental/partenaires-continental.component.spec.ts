import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PartenairesContinentalComponent } from './partenaires-continental.component';

describe('PartenairesContinentalComponent', () => {
  let component: PartenairesContinentalComponent;
  let fixture: ComponentFixture<PartenairesContinentalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PartenairesContinentalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PartenairesContinentalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
