import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { ReactiveFormsModule } from "@angular/forms";
import { HttpClientModule, HTTP_INTERCEPTORS } from "@angular/common/http";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { NoopAnimationsModule } from "@angular/platform-browser/animations";

import { MatButtonModule } from "@angular/material/button";
import { MatCardModule } from "@angular/material/card";
import { MatIconModule } from "@angular/material/icon";
import { MatInputModule } from "@angular/material/input";
import { MatListModule } from "@angular/material/list";
import { MatToolbarModule } from "@angular/material/toolbar";

import { NavigationComponent } from "./components/navigation/navigation.component";
import { SignupComponent } from "./components/signup/signup.component";
import { LoginComponent } from "./components/login/login.component";
import { HomeComponent } from "./components/home/home.component";
import { PostsComponent } from "./components/posts/posts.component";
import { CreatePostComponent } from "./components/create-post/create-post.component";

import { AuthInterceptorService } from "./services/auth-interceptor.service";
import { FooterComponent } from './components/footer/footer.component';
import { TruyenComponent } from './components/truyen/truyen.component';
import { ThongtinComponent } from './components/thongtin/thongtin.component';
import { GioithieuComponent } from './components/gioithieu/gioithieu.component';
import { TintucComponent } from './components/tintuc/tintuc.component';
import { LienheComponent } from './components/lienhe/lienhe.component';
import { TacgiaComponent } from './components/tacgia/tacgia.component';
import { Page404Component } from './components/page404/page404.component';


@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    SignupComponent,
    LoginComponent,
    HomeComponent,
    PostsComponent,
    CreatePostComponent,
    FooterComponent,
    TruyenComponent,
    ThongtinComponent,
    GioithieuComponent,
    TintucComponent,
    LienheComponent,
    TacgiaComponent,
    Page404Component,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NoopAnimationsModule,
    MatButtonModule,
    MatCardModule,
    MatIconModule,
    MatInputModule,
    MatListModule,
    MatToolbarModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptorService,
      multi: true,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
