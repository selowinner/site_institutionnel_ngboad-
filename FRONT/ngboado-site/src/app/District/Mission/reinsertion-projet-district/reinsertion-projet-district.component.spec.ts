import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReinsertionProjetDistrictComponent } from './reinsertion-projet-district.component';

describe('ReinsertionProjetDistrictComponent', () => {
  let component: ReinsertionProjetDistrictComponent;
  let fixture: ComponentFixture<ReinsertionProjetDistrictComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReinsertionProjetDistrictComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReinsertionProjetDistrictComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
