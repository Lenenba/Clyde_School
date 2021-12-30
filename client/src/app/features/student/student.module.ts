import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';



import { StudentListComponent } from './student-container/student-list/student-list.component';
import { StudentFormComponent } from './student-container/student-form/student-form.component';
import { StudentDetailsComponent } from './student-container/student-details/student-details.component';
import { StudentContainerComponent } from './student-container/student-container.component';
import { MaterialModule } from 'src/app/shared/modules/material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { STUDENT_ROUTES } from './student.routes';
import { SharedModule } from 'src/app/shared/modules/shared.module';



@NgModule({
  declarations: [
    StudentListComponent,
    StudentFormComponent,
    StudentDetailsComponent,
    StudentContainerComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild(STUDENT_ROUTES),
  ]
})
export class StudentModule { }
