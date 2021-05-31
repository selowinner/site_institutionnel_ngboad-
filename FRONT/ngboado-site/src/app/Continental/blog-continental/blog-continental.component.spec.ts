import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlogContinentalComponent } from './blog-continental.component';

describe('BlogContinentalComponent', () => {
  let component: BlogContinentalComponent;
  let fixture: ComponentFixture<BlogContinentalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BlogContinentalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BlogContinentalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
