import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgenceDistrictComponent } from './agence-district.component';

describe('AgenceDistrictComponent', () => {
  let component: AgenceDistrictComponent;
  let fixture: ComponentFixture<AgenceDistrictComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AgenceDistrictComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AgenceDistrictComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
