import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";

import { Observable } from "rxjs";
import { catchError, first, tap } from "rxjs/operators";

import { Post } from "../models/Post";
import { User } from "../models/User";
import { ErrorHandlerService } from "./error-handler.service";

@Injectable({
  providedIn: "root",
})
export class PostService {
  private url = "http://localhost:8080/post";

  httpOptions: { headers: HttpHeaders } = {
    headers: new HttpHeaders({ "Content-Type": "application/json" }),
  };

  constructor(
    private http: HttpClient,
    private errorHandlerService: ErrorHandlerService
  ) {}

//Lấy tất cả dữ liệu
  getAllPosts(): Observable<Post[]> {
    return this.http
      .get<Post[]>(this.url, { responseType: "json" })
      .pipe(
        tap((_) => console.log("GET Posts")),
        catchError(
          this.errorHandlerService.handleError<Post[]>("getAllPosts", [])
        )
      );
  }

//Hàm lấy tất cả dữ liệu
  fetchAll(): Observable<Post[]> {
    return this.http
      .get<Post[]>(this.url, { responseType: "json" })
      .pipe(
        catchError(this.errorHandlerService.handleError<Post[]>("fetchAll", []))
      );
  }
//Đăng truyện
  createPost(
    formData: Partial<Post>,
    userId: Pick<User, "id">
  ): Observable<Post> {
    return this.http
      .post<Post>(
        this.url,
        { title: formData.title, body: formData.body, user: userId },
        this.httpOptions
      )
      .pipe(
        catchError(this.errorHandlerService.handleError<Post>("createPost"))
      );
  }
//Xóa truyện
  deletePost(postId: Pick<Post, "id">): Observable<{}> {
    return this.http
      .delete<Post>(`${this.url}/${postId}`, this.httpOptions)
      .pipe(
        first(),
        catchError(this.errorHandlerService.handleError<Post>("deletePost"))
      );
  }
//Xem truyện theo id
  getByID(postId: Pick<Post, "id">): Observable<Post[]> {
    return this.http
      .get<Post[]>(`${this.url}/${postId}`, { responseType: "json" })
      .pipe(
        tap((_) => console.log("GET Posts")),
        catchError(
          this.errorHandlerService.handleError<Post[]>("getByID", [])
        )
      );
  }
}

