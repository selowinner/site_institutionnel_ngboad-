import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DonsSectionComponent } from './dons-section.component';

describe('DonsSectionComponent', () => {
  let component: DonsSectionComponent;
  let fixture: ComponentFixture<DonsSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DonsSectionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DonsSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
