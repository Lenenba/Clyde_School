import { Routes } from "@angular/router";
import { StudentContainerComponent } from "./student-container/student-container.component";
import { StudentDetailsComponent } from "./student-container/student-details/student-details.component";
import { StudentFormComponent } from "./student-container/student-form/student-form.component";

export const STUDENT_ROUTES: Routes = [{
  path: '', component: StudentContainerComponent,
  children:[
    {path:'new', component:StudentFormComponent},
    {path: ':index/edit', component:StudentFormComponent},
    {path:':index', component:StudentDetailsComponent},
    {path:'', redirectTo:'new', pathMatch:'full'}
  ]
}]
