import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgenceSectionComponent } from './agence-section.component';

describe('AgenceSectionComponent', () => {
  let component: AgenceSectionComponent;
  let fixture: ComponentFixture<AgenceSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AgenceSectionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AgenceSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
