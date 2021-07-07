import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { AuthGuard } from "./services/auth-guard.service";

import { HomeComponent } from "./components/home/home.component";
import { PostsComponent } from "./components/posts/posts.component";
import { LoginComponent } from "./components/login/login.component";
import { SignupComponent } from "./components/signup/signup.component";
import { TruyenComponent } from "./components/truyen/truyen.component";
import { ThongtinComponent } from "./components/thongtin/thongtin.component";
import { GioithieuComponent } from "./components/gioithieu/gioithieu.component";
import { TintucComponent } from "./components/tintuc/tintuc.component";
import { TacgiaComponent } from "./components/tacgia/tacgia.component";
import { LienheComponent } from "./components/lienhe/lienhe.component";
import { Page404Component } from "./components/page404/page404.component";

const routes: Routes = [
  { path: "", component: HomeComponent },
  {path:"home", component: HomeComponent},
  {path:"home/:id", component: TruyenComponent},
  { path: "posts", component: PostsComponent, canActivate: [AuthGuard] },
  { path: "login", component: LoginComponent },
  { path: "signup", component: SignupComponent },
  { path: "thongtin", component:ThongtinComponent},
  { path: "gioithieu", component:GioithieuComponent},
  { path: "tintuc", component:TintucComponent},
  { path: "lienhe", component:LienheComponent},
  { path: "tacgia", component:TacgiaComponent},
  { path: "**", component:Page404Component },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
