import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MissionPaysComponent } from './mission-pays.component';

describe('MissionPaysComponent', () => {
  let component: MissionPaysComponent;
  let fixture: ComponentFixture<MissionPaysComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MissionPaysComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MissionPaysComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
