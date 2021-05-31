import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MembresPaysComponent } from './membres-pays.component';

describe('MembresPaysComponent', () => {
  let component: MembresPaysComponent;
  let fixture: ComponentFixture<MembresPaysComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MembresPaysComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MembresPaysComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
