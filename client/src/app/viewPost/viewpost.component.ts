import { Component, OnInit } from '@angular/core';
import { ViewPostService} from './viewpost.service';
import { Post } from '../models/post.model';
import { CommonService } from '../service/common.service';

@Component({
  selector: 'app-show-post',
  templateUrl: './viewpost.component.html',
  styleUrls: ['./viewpost.component.css'],
  providers: [ ViewPostService ]
})
export class ViewPostComponent implements OnInit {

  public posts: any [];

  constructor(private viewPostService: ViewPostService, private commonService: CommonService) {

  }

  ngOnInit() {
    this.getAllPost();

    this.commonService.postAdded_Observable.subscribe( res => {
      this.getAllPost();
    });
  }

  getAllPost() {
    this.viewPostService.getAllPost().subscribe(result => {
      this.posts = result['data'];
    });
  }

  editPost(post: Post) {
    this.commonService.setPostToEdit(post);
    console.log('post is ', post);
  }
}
