import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MembresComitVeilleComponent } from './membres-comit-veille.component';

describe('MembresComitVeilleComponent', () => {
  let component: MembresComitVeilleComponent;
  let fixture: ComponentFixture<MembresComitVeilleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MembresComitVeilleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MembresComitVeilleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
