import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AssistanceProjetDistrictComponent } from './assistance-projet-district.component';

describe('AssistanceProjetDistrictComponent', () => {
  let component: AssistanceProjetDistrictComponent;
  let fixture: ComponentFixture<AssistanceProjetDistrictComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AssistanceProjetDistrictComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AssistanceProjetDistrictComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
