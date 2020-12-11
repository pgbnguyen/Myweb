import { Input } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { BlogPost } from '../BlogPost';
import blogData from '../blogData.json';
import { PostService } from '../post.service';
@Component({
  selector: 'app-latest-posts',
  templateUrl: './latest-posts.component.html',
  styleUrls: ['./latest-posts.component.css']
})
export class LatestPostsComponent implements OnInit {
  @Input() posts:Array<BlogPost> ;
  constructor(private postData: PostService) { }

  ngOnInit(): void {
    this.postData.getPosts(1, null, null).subscribe(data =>{this.posts=data.slice(0,3)});
  }

}
