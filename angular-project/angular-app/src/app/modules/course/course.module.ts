import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CourseRoutingModule } from './course-routing.module';
import { CourseFeaturedComponent } from './course-featured/course-featured.component';
import { CourseListComponent } from './course-list/course-list.component';
import { CourseDetailComponent } from './course-detail/course-detail.component';
import { CourseRecentComponent } from './course-recent/course-recent.component';
import { CourseCategoriesComponent } from './course-categories/course-categories.component';
import { CourseServicesComponent } from './course-services/course-services.component';
import { CourseRoutingComponent } from './course-routing/course-routing.component';


@NgModule({
  declarations: [ CourseFeaturedComponent, CourseListComponent, CourseDetailComponent, CourseRecentComponent, CourseCategoriesComponent, CourseServicesComponent, CourseRoutingComponent],
  imports: [
    CommonModule,
    CourseRoutingModule
  ]
})
export class CourseModule { }
