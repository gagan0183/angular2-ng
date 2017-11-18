import { Component } from '@angular/core';
import { Article } from './article/article';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  articles: Article[] = [
    new Article('Angular 2', 'http://angular2.io', 9),
    new Article('Fullstack', 'http://fullstack.io', 9),
    new Article('Angular', 'http://angular.io', 9)
  ];
  
  addArticle(title, link) {
    console.log(`Adding article: ${title} ${link}`);
    this.articles.push(new Article(title, link, 9));
    return false;
  }

  sortArticles(): Article[] {
    return this.articles.sort((a: Article, b: Article) => b.votes - a.votes);
  }
}
