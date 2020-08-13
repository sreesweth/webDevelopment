import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CourseServicesComponent } from './course-services.component';

describe('CourseServicesComponent', () => {
  let component: CourseServicesComponent;
  let fixture: ComponentFixture<CourseServicesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CourseServicesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CourseServicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
