import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MembresRegionalComponent } from './membres-regional.component';

describe('MembresRegionalComponent', () => {
  let component: MembresRegionalComponent;
  let fixture: ComponentFixture<MembresRegionalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MembresRegionalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MembresRegionalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
