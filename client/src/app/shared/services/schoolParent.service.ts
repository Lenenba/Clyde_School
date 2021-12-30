import { Injectable } from '@angular/core';
import { BehaviorSubject, filter, map, Observable, tap } from 'rxjs';
import { SchoolParent } from '../interfaces/schoolParent.interface';
import { HttpService } from './http.service';

@Injectable({
  providedIn: 'root'
})
export class SchoolParentService {

  public schoolParent$: BehaviorSubject<SchoolParent[] | null> = new BehaviorSubject<SchoolParent[] | null>(null)

  public fetchAllSchoolParents () : Observable<SchoolParent[]> {
    return this.http.fetchAll('getSchoolParents').pipe(
      tap((obj:any) =>{
        this.schoolParent$.next(obj.data)
      }))
  }

  public fetchOneSchoolParent(schoolParentId:number):Observable<SchoolParent | null> {
    return  this.http.fetchOne(schoolParentId, 'getSchoolParent')
  }

  constructor(private http : HttpService) { }
}
