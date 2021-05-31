import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FondComitVeilleComponent } from './fond-comit-veille.component';

describe('FondComitVeilleComponent', () => {
  let component: FondComitVeilleComponent;
  let fixture: ComponentFixture<FondComitVeilleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FondComitVeilleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FondComitVeilleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
