import { Component, OnInit, Input } from '@angular/core';
import { Post } from 'src/app/models/post.model';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent implements OnInit {

  color = 'primary';
  mode = 'indeterminate';
  value = 50;

  constructor() { }

  @Input() images: Array<Post>;

  ngOnInit() {
  }

}
