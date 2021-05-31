import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DonsDistrictComponent } from './dons-district.component';

describe('DonsDistrictComponent', () => {
  let component: DonsDistrictComponent;
  let fixture: ComponentFixture<DonsDistrictComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DonsDistrictComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DonsDistrictComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
