import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Student } from 'src/app/shared/interfaces/student.interface';
import { StudentService } from 'src/app/shared/services/student.service';

import { SchoolParentService } from 'src/app/shared/services/schoolParent.service';
import { SchoolParent } from 'src/app/shared/interfaces/schoolParent.interface';

@Component({
  selector: 'app-student-container',
  templateUrl: './student-container.component.html',
  styleUrls: ['./student-container.component.scss']
})
export class StudentContainerComponent{

  public student$ : Observable< Student[] | null > = this.studentService.student$
  public schoolParent$ : Observable< SchoolParent[] | null > = this.schoolParentService.schoolParent$

  constructor(
    private studentService : StudentService,
    private schoolParentService : SchoolParentService) {}
}
