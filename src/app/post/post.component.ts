import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { postsMock } from '../data/posts.mock';
import { Post } from '../models/post.interface';
import { PostService } from '../services/post.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss'],
})
export class PostComponent implements OnInit {
  posts: Array<Post>;
  post?: Post;
  constructor(private route: ActivatedRoute, private postService : PostService) {
    this.posts = new Array<Post>();
  }

  ngOnInit(): void {

    this.postService.getPosts().subscribe(
      (response: Array<Post>) => {
          this.posts = response;
          this.post = this.posts.find(x=>x.slug == this.route.snapshot.paramMap.get('slug'));
      },
      (error) => {
        console.log(error);
      }
    );

  }
}
