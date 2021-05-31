import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlogRegionalComponent } from './blog-regional.component';

describe('BlogRegionalComponent', () => {
  let component: BlogRegionalComponent;
  let fixture: ComponentFixture<BlogRegionalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BlogRegionalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BlogRegionalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
