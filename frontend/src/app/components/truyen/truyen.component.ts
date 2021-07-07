import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Post } from 'src/app/models/Post';
import { PostService } from "src/app/services/post.service";
import { ActivatedRoute } from '@angular/router'


@Component({
  selector: 'app-truyen',
  templateUrl: './truyen.component.html',
  styleUrls: ['./truyen.component.scss']
})
export class TruyenComponent implements OnInit {
  posts$: Observable<Post[]>;
  constructor(
    private postService: PostService,
    private route: ActivatedRoute,
  ) { }
  
  ngOnInit(): void {
    this.posts$ = this.getByID(this.route.snapshot.params.id);
  }
  getByID(postId: Pick<Post, "id">): Observable<Post[]> {
    return this.postService.getByID(postId);
  }

}
