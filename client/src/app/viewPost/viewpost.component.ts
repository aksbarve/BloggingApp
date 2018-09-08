import { Component, OnInit } from '@angular/core';
import { ViewPostService} from './viewpost.service';
// import { Post } from '../models/post.model';

@Component({
  selector: 'app-show-post',
  templateUrl: './viewpost.component.html',
  styleUrls: ['./viewpost.component.css'],
  providers: [ ViewPostService ]
})
export class ViewPostComponent implements OnInit {

  public posts: any [];

  constructor(private viewPostService: ViewPostService) {

  }

  ngOnInit() {
    this.getAllPost();
  }

  getAllPost() {
    this.viewPostService.getAllPost().subscribe(result => {
      this.posts = result['data'];
    });
  }

}
