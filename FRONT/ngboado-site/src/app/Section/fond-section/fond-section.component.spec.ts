import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FondSectionComponent } from './fond-section.component';

describe('FondSectionComponent', () => {
  let component: FondSectionComponent;
  let fixture: ComponentFixture<FondSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FondSectionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FondSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
