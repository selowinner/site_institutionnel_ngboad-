import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PartenairesSectionComponent } from './partenaires-section.component';

describe('PartenairesSectionComponent', () => {
  let component: PartenairesSectionComponent;
  let fixture: ComponentFixture<PartenairesSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PartenairesSectionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PartenairesSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
