import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlogPaysComponent } from './blog-pays.component';

describe('BlogPaysComponent', () => {
  let component: BlogPaysComponent;
  let fixture: ComponentFixture<BlogPaysComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BlogPaysComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BlogPaysComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
