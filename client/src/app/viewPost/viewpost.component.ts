import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
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

  @ViewChild('closeBtn') closeBtn: ElementRef;

  public posts: any [];
  public post_to_delete;

  constructor(private viewPostService: ViewPostService, private commonService: CommonService) {

  }

  ngOnInit() {
    this.getAllPost();

    this.commonService.postAdded_Observable.subscribe( res => {
      this.getAllPost();
    });
  }

  setDelete(post: Post) {
    this.post_to_delete = post;
  }

  unsetDelete() {
    this.post_to_delete = null;
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

  deletePost() {
    this.viewPostService.deletePost(this.post_to_delete._id).subscribe(res => {
      this.getAllPost();
      this.closeBtn.nativeElement.click();
    });
  }
}
