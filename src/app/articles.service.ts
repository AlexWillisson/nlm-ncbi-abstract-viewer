import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

import { Article } from './article';

@Injectable({
  providedIn: 'root'
})
export class ArticlesService {
  private articlesUrl = 'http://54.165.151.163:3000/';

  getArticles(): Observable<Article[]> {
    return this.http.get<Article[]>(this.articlesUrl)
      .pipe(
        tap(_ => console.log('fetched articles')),
        catchError(this.handleError<Article[]>('getArticles', []))
      );
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      console.error(error);

      return of(result as T);
    };
  }

  constructor(private http: HttpClient) { }
}
