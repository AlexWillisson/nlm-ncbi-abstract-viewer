import { Component, OnInit } from '@angular/core';

import { ArticlesService } from '../articles.service';

import { ArticleData, Article } from '../article';

@Component({
  selector: 'app-articles-list',
  templateUrl: './articles-list.component.html',
  styleUrls: ['./articles-list.component.css']
})
export class ArticlesListComponent implements OnInit {
  articles: Article[] = [];

  constructor(
    private articleService: ArticlesService) {
  }

  ngOnInit(): void {
    this.getArticles();
  }

  getArticles(): void {
    this.articleService.getArticles()
      .subscribe(articles => {
        this.articles = articles.map((articleData: ArticleData) =>
        {
          return {
            data: articleData,
            hideAbstract: true
          }
        });
      });
  }

  toggleAbstract(article: Article) {
    article.hideAbstract = ! article.hideAbstract;
  }
}
