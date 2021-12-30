import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { first, Observable, tap } from 'rxjs';
import { SchoolParent } from 'src/app/shared/interfaces/schoolParent.interface';
import { Student } from 'src/app/shared/interfaces/student.interface';
import { SchoolParentService } from 'src/app/shared/services/schoolParent.service';
import { StudentService } from 'src/app/shared/services/student.service';

@Component({
  selector: 'app-student-form',
  templateUrl: './student-form.component.html',
  styleUrls: ['./student-form.component.scss']
})
export class StudentFormComponent implements OnInit {

  public student!: Student | null
  private EmptyStudent: Student = {
    first_name: '',
    last_name: '',
    phone: '',
    adresse: '',
    ville:'',
    pays: '',
    status: false,
    date_naissance: new Date(),
    email: '',
    image: '514d07fa743a3d65d71bd993aa975243.png',
    school_parent_id: 0
  }

  public parentsList$!: SchoolParent[] | null

  public studentForm: FormGroup =this.fb.group({
    first_name: [this.EmptyStudent.first_name, Validators.required],
    last_name: [this.EmptyStudent.last_name, Validators.required],
    phone: [this.EmptyStudent.phone, Validators.required],
    adresse: [this.EmptyStudent.adresse, Validators.required],
    ville:[this.EmptyStudent.ville, Validators.required],
    pays: [this.EmptyStudent.pays, Validators.required],
    status: [this.EmptyStudent.status, Validators.required],
    image: [this.EmptyStudent.image],
    date_naissance: [this.EmptyStudent.date_naissance, [Validators.required]],
    email: [this.EmptyStudent.email, [Validators.required, Validators.email]],
    school_parent_id: [this.EmptyStudent.school_parent_id, Validators.required],
  })

  constructor(
    private studentService:StudentService,
    private schoolParentService:SchoolParentService,
    private fb : FormBuilder,
    private router : Router,
    private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.schoolParentService.schoolParent$.pipe(
      tap((list:SchoolParent[]|null) => {
        this.parentsList$ = list;
      })
    ).subscribe()
    this.activatedRoute.paramMap.subscribe((paramMap:ParamMap) => {
      const index = paramMap.get('index');
      if (index !== null){
        this.studentService.fetchOneStudent(+index)
          .pipe(first())
          .subscribe((student: Student | null) => {
            this.student = student;
            this.initForm(student!)
          }
        )
      }
    })
  }

  initForm(student:Student = this.EmptyStudent) : void{
    this.studentForm = this.fb.group({
      first_name: student.first_name,
      last_name: student.last_name,
      phone: student.phone,
      adresse: student.adresse,
      ville:student.ville,
      pays: student.pays,
      status: student.status,
      date_naissance: student.date_naissance,
      email: student.email,
      image: student.image,
      school_parent_id: student.school_parent_id,
    })
  }

  createdStudents(){
    console.log(this.studentForm.value)
    this.studentService.addStudent(this.studentForm.value).subscribe();
    this.router.navigate(['..'], { relativeTo: this.activatedRoute});
  }
}
