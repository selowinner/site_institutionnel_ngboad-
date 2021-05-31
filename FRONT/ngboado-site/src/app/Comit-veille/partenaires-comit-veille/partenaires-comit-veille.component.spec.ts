import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PartenairesComitVeilleComponent } from './partenaires-comit-veille.component';

describe('PartenairesComitVeilleComponent', () => {
  let component: PartenairesComitVeilleComponent;
  let fixture: ComponentFixture<PartenairesComitVeilleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PartenairesComitVeilleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PartenairesComitVeilleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
