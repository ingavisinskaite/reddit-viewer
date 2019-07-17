import { Post } from './../../models/post.model';
import { ThemesService } from './../../services/themes.service';
import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {
  themes: Array<any>;
  themesToSelect: Array<string> = [];
  selectedTheme: string;
  limitTo = 20;
  images: Array<Post> = [];
  buttonClicked = false;
  theme = false;

  constructor(private data: ThemesService) { }

  ngOnInit() {
    this.getAllThemes();
  }

  private getAllThemes(): void {
    this.data.getAllThemes().then(data => {
      this.themes = data.data.children;
      this.themes.map(theme => {
        const urlArr = theme.data.url.split('/');
        const lowerCaseTheme = urlArr[2];
        const formattedTheme = lowerCaseTheme.charAt(0).toUpperCase() + lowerCaseTheme.slice(1);
        this.themesToSelect.push(formattedTheme);
      });
      console.log(this.themesToSelect);
      return this.themesToSelect;
    });
  }

  private formatTheme(theme: string): string {
    const formattedTheme = '/r/' + theme.charAt(0).toLowerCase() + theme.slice(1);
    return formattedTheme;
  }


  public getTheme(theme: string, limit: number): void {
    this.buttonClicked = true;
    const formattedTheme = this.formatTheme(theme);
    this.images = [];
    this.data.getTheme(formattedTheme, limit).subscribe(data => {
      console.log(data);
      data.data.children.map(post => {
        if (post.data.url !== '') {
          const urlArr = post.data.url.split('');
          console.log(urlArr);
          if (urlArr[8] === 'i' && urlArr[urlArr.length - 1] !== 'v') {
            const formattedPostUrl = 'https://www.reddit.com' + post.data.permalink;
            const article = {
              imageUrl: post.data.url,
              postUrl: formattedPostUrl
            };
            this.images.push(article);
          }
        }
      });
      return this.images;
    });
  }

  public selectTheme(event: any) {
    console.log(event);
    this.theme = true;
    this.selectedTheme = event;
    console.log(this.selectedTheme);
  }

}
