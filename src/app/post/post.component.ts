import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { postsMock } from '../data/posts.mock';
import { Post } from '../models/post.interface';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss'],
})
export class PostComponent implements OnInit {
  posts: Post[] = postsMock
  post?: Post;
  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    //this.post = postsMock.find((post) => post.id === +this.route.snapshot.params['id']);
  }
}
