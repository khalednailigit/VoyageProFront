import { Component, OnInit } from '@angular/core';
import { Post } from 'src/app/model/post';
import { Responce } from 'src/app/model/responce';
import { PostService } from 'src/app/service/post.service';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss']
})
export class IndexComponent implements OnInit {

  posts: Post[] = [];
  isLoading : boolean = true;

  constructor(public postService: PostService) { }

  ngOnInit(): void {
    this.postService.getAll().subscribe(data=>{
      this.posts = data.rows;
      this.isLoading = false;
      console.log(this.posts);
    })
  }

  deletePost(id){
    this.postService.delete(id).subscribe(res => {
         this.posts = this.posts.filter(item => item.activity_id !== id);
         console.log('Post deleted successfully!');
    })
  }

}
