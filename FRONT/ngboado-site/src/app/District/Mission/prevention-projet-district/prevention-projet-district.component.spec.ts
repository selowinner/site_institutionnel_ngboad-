import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PreventionProjetDistrictComponent } from './prevention-projet-district.component';

describe('PreventionProjetDistrictComponent', () => {
  let component: PreventionProjetDistrictComponent;
  let fixture: ComponentFixture<PreventionProjetDistrictComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PreventionProjetDistrictComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PreventionProjetDistrictComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
