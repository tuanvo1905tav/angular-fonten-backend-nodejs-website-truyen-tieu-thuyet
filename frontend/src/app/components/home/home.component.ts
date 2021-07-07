import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Post } from 'src/app/models/Post';
import { User } from 'src/app/models/User';
import { HomeService } from "src/app/services/home.service";


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  posts$: Observable<Post[]>;
  userId: Pick<User, "id">;

  constructor(private homeService: HomeService,) { }

  ngOnInit(): void {
    this.posts$ = this.getAllPosts();
  }

  getAllPosts(): Observable<Post[]> {
    return this.homeService.getAllPosts();
  }

}
