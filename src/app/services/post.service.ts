import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PostService {
  constructor(private http: HttpClient) {}

  getPosts(): Observable<any> {
    let res = new Subject<object>();

    this.http.get<any>('http://localhost:3001/posts').subscribe(
      (response: any) => {
        res.next(response);
      },
      (error: any) => {
        res.error(error);
      }
    );

    return res.asObservable();
  }
}
