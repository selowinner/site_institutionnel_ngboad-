import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlogComitVeilleComponent } from './blog-comit-veille.component';

describe('BlogComitVeilleComponent', () => {
  let component: BlogComitVeilleComponent;
  let fixture: ComponentFixture<BlogComitVeilleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BlogComitVeilleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BlogComitVeilleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
