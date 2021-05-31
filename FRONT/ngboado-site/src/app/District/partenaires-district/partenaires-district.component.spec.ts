import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PartenairesDistrictComponent } from './partenaires-district.component';

describe('PartenairesDistrictComponent', () => {
  let component: PartenairesDistrictComponent;
  let fixture: ComponentFixture<PartenairesDistrictComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PartenairesDistrictComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PartenairesDistrictComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
