import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgenceFondDistrictComponent } from './agence-fond-district.component';

describe('AgenceFondDistrictComponent', () => {
  let component: AgenceFondDistrictComponent;
  let fixture: ComponentFixture<AgenceFondDistrictComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AgenceFondDistrictComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AgenceFondDistrictComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
