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



  getPost(slug: any): Observable<any> {
    let res = new Subject<object>();

    const params = new HttpParams().set('slug', slug);

    this.http
      .get<any>(
        'http://localhost:3001/post/'+slug,
      )
      .subscribe(
        (response) => {
          res.next(response);
        },
        (error) => {
          res.error(error);
        }
      );

    return res.asObservable();
  }
}



