import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PartenairesPaysComponent } from './partenaires-pays.component';

describe('PartenairesPaysComponent', () => {
  let component: PartenairesPaysComponent;
  let fixture: ComponentFixture<PartenairesPaysComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PartenairesPaysComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PartenairesPaysComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
