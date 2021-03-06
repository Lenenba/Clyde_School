import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path: '', redirectTo:'students', pathMatch:'full'},
  {path: 'students',
    loadChildren: () =>
    import('./features/student/student.module').then(
      (m) => m.StudentModule)}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
