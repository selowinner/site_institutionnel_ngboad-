import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DonsPaysComponent } from './dons-pays.component';

describe('DonsPaysComponent', () => {
  let component: DonsPaysComponent;
  let fixture: ComponentFixture<DonsPaysComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DonsPaysComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DonsPaysComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
