import { Injectable } from '@angular/core';
import { BehaviorSubject, filter, map, Observable, tap } from 'rxjs';
import { Student } from '../interfaces/student.interface';
import { HttpService } from './http.service';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  public student$: BehaviorSubject<Student[] | null> = new BehaviorSubject<Student[] | null>(null)

  public fetchAllStudents () : Observable<Student[]> {
    return this.http.fetchAll('getstudents').pipe(
      tap((obj:any) =>{
        this.student$.next(obj.data)
      }))
  }

  public fetchOneStudent(studentId:number): Observable<Student | null> {
    return  this.http.fetchOne(studentId, 'getstudent' ).pipe(
      map((val:Student) => {return val;})
    )
  }

  public addStudent(student: Student): Observable<Student | null> {
    return this.http.add(student, 'poststudents').pipe(
      tap((savedStudent:Student) => {
        const val = this.student$.value;
        this.student$.next([...val!, savedStudent])
      })

    )
  }

  constructor(private http : HttpService) { }
}
