import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgenceComitVeilleComponent } from './agence-comit-veille.component';

describe('AgenceComitVeilleComponent', () => {
  let component: AgenceComitVeilleComponent;
  let fixture: ComponentFixture<AgenceComitVeilleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AgenceComitVeilleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AgenceComitVeilleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
