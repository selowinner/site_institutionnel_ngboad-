import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PresentationDistrictComponent } from './presentation-district.component';

describe('PresentationDistrictComponent', () => {
  let component: PresentationDistrictComponent;
  let fixture: ComponentFixture<PresentationDistrictComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PresentationDistrictComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PresentationDistrictComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
