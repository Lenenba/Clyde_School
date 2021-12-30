import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, filter, map, tap, from } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  public fetchAll (table: string) : Observable<Object[]> {
    return this.http.get<any[]>('http://127.0.0.1:8000/api/v1/'+table)
  }

  public fetchOne(ObjectID:number, table: string):Observable<any | null> {
    return this.http.get<any[]>('http://127.0.0.1:8000/api/v1/'+table+'/'+ObjectID)
  }

  public add(object: any, table: string):Observable<any | null> {
    return this.http.post('http://127.0.0.1:8000/api/v1/'+table, object)
  }

  constructor(private http : HttpClient) { }
}
