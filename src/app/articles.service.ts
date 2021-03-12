import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

import { ArticleData, AbstractSection } from './article';

@Injectable({
  providedIn: 'root'
})
export class ArticlesService {
  private articlesUrl = 'http://54.165.151.163:3000/';

  getArticles(): Observable<ArticleData[]> {
    return this.http.get<ArticleData[]>(this.articlesUrl)
      .pipe(
        tap(_ => console.log('fetched articles')),
        catchError(this.handleError<ArticleData[]>('getArticles', []))
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
