import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlogSousRegionalComponent } from './blog-sous-regional.component';

describe('BlogSousRegionalComponent', () => {
  let component: BlogSousRegionalComponent;
  let fixture: ComponentFixture<BlogSousRegionalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BlogSousRegionalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BlogSousRegionalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
