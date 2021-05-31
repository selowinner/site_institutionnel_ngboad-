import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FondDistrictComponent } from './fond-district.component';

describe('FondDistrictComponent', () => {
  let component: FondDistrictComponent;
  let fixture: ComponentFixture<FondDistrictComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FondDistrictComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FondDistrictComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
