import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DonsRegionalComponent } from './dons-regional.component';

describe('DonsRegionalComponent', () => {
  let component: DonsRegionalComponent;
  let fixture: ComponentFixture<DonsRegionalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DonsRegionalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DonsRegionalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
