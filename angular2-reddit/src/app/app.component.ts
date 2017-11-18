import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  addArticle(title, link) {
    console.log(`Adding article: ${title} ${link}`);
    return false;
  }
}
