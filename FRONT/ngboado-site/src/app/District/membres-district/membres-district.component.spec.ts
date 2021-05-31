import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MembresDistrictComponent } from './membres-district.component';

describe('MembresDistrictComponent', () => {
  let component: MembresDistrictComponent;
  let fixture: ComponentFixture<MembresDistrictComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MembresDistrictComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MembresDistrictComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
