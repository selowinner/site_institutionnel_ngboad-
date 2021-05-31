import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FondPaysComponent } from './fond-pays.component';

describe('FondPaysComponent', () => {
  let component: FondPaysComponent;
  let fixture: ComponentFixture<FondPaysComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FondPaysComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FondPaysComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
