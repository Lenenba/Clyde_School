import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { first } from 'rxjs/operators';
import { Student } from 'src/app/shared/interfaces/student.interface';
import { StudentService } from 'src/app/shared/services/student.service';

@Component({
  selector: 'app-student-details',
  templateUrl: './student-details.component.html',
  styleUrls: ['./student-details.component.scss']
})
export class StudentDetailsComponent implements OnInit {

  public student!: Student | null;
  constructor(
    private studentService: StudentService,
    private router : Router,
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe((paramMap:ParamMap) => {
      const index = paramMap.get('index');
      if (index !== null){
        this.studentService.fetchOneStudent(+index)
          .pipe(first())
          .subscribe((student: Student | null) => {
            this.student = student
          }
        )
      }
    })
  }


}
