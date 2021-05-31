import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlogDistrictComponent } from './blog-district.component';

describe('BlogDistrictComponent', () => {
  let component: BlogDistrictComponent;
  let fixture: ComponentFixture<BlogDistrictComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BlogDistrictComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BlogDistrictComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
