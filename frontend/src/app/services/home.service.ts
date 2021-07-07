import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";

import { Observable } from "rxjs";
import { catchError, first, tap } from "rxjs/operators";

import { Post } from "../models/Post";
// import { User } from "../models/User";
import { ErrorHandlerService } from "./error-handler.service";

@Injectable({
  providedIn: "root",
})
export class HomeService {
  private url = "http://localhost:8080/post";

  httpOptions: { headers: HttpHeaders } = {
    headers: new HttpHeaders({ "Content-Type": "application/json" }),
  };

  constructor(
    private http: HttpClient,
    private errorHandlerService: ErrorHandlerService
  ) {}


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

  

}

