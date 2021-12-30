import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { SchoolParentService } from './shared/services/schoolParent.service';
import { StudentService } from './shared/services/student.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{

  constructor (
    private studentServive: StudentService,
    private schoolParentService: SchoolParentService){}

  ngOnInit(): void {
      this.studentServive.fetchAllStudents().subscribe();
      this.schoolParentService.fetchAllSchoolParents().subscribe();
  }

}
