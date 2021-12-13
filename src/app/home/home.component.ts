import { Component, OnInit } from '@angular/core';
import { postsMock } from '../data/posts.mock';
import { Post } from '../models/post.interface';
import { PostService } from '../services/post.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  title = 'ng-best-dad-jokes';
  posts: Array<Post>;
  isSpinner = false;

  constructor(private postService : PostService) { 

    this.posts = new Array<Post>();
  }

  ngOnInit(): void {

    this.postService.getPosts().subscribe(
      (response: any) => {
       

          this.posts = response;

          if (this.posts.length === 0 || this.posts.length === null) {
            this.isSpinner = true;
          }
          console.log(response);
       
      },
      (error) => {
        console.log(error);
      }
    );


  }

}
