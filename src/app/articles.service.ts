import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { ArticleData } from './article';

@Injectable({
  providedIn: 'root'
})
export class ArticlesService {
  private articlesUrl = 'https://abstracts.willisson.org:3000/';

  getArticles(): Observable<ArticleData[]> {
    return this.http.get<ArticleData[]>(this.articlesUrl)
      .pipe(
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
