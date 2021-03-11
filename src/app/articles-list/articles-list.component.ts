import { Component, OnInit } from '@angular/core';

import { articles } from "../articles";

@Component({
  selector: 'app-articles-list',
  templateUrl: './articles-list.component.html',
  styleUrls: ['./articles-list.component.css']
})
export class ArticlesListComponent implements OnInit {
  articles = articles;

  constructor() { }

  ngOnInit(): void {
  }

}
