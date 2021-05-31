import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DonsComitVeilleComponent } from './dons-comit-veille.component';

describe('DonsComitVeilleComponent', () => {
  let component: DonsComitVeilleComponent;
  let fixture: ComponentFixture<DonsComitVeilleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DonsComitVeilleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DonsComitVeilleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
