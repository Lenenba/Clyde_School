import { Component, Input, OnInit } from '@angular/core';
import { tap } from 'rxjs';
import { SchoolParent } from 'src/app/shared/interfaces/schoolParent.interface';
import { Student } from 'src/app/shared/interfaces/student.interface';
import { StudentService } from 'src/app/shared/services/student.service';

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.scss']
})
export class StudentListComponent implements OnInit {

  @Input() public student!: Student[]|null;
  @Input() public schoolParent!: SchoolParent[] | null;
  public dataSource!: Student[]
  public displayedColumns: string[] = [
    'id',
    'first_name',
    'last_name',
    'phone',
    'pays',
    'status',
    'actions',
    ];

  constructor(private studentService: StudentService) {}

  ngOnInit(): void {

  }

}
