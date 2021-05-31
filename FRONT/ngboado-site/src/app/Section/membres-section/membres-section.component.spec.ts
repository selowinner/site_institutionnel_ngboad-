import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MembresSectionComponent } from './membres-section.component';

describe('MembresSectionComponent', () => {
  let component: MembresSectionComponent;
  let fixture: ComponentFixture<MembresSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MembresSectionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MembresSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
