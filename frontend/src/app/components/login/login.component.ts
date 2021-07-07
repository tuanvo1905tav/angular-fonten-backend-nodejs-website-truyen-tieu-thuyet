import { Component, OnInit } from "@angular/core";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { User } from "src/app/models/User";

import { AuthService } from "src/app/services/auth.service";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.scss"],
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  userEmail: Pick<User, "email">;
  userPassword: Pick<User, "password">;



  constructor(private authService: AuthService) {}

  ngOnInit(): void {
    this.loginForm = this.createFormGroup();
  }

  createFormGroup(): FormGroup {
    return new FormGroup({
      email: new FormControl("", [Validators.required, Validators.email]),
      password: new FormControl("", [
        Validators.required,
        Validators.minLength(7),
      ]),
    });
  }

  //=================
  mess = '';
  ismess = false;
  login(): void {
      this.authService
      .login(this.loginForm.value.email, this.loginForm.value.password)
      .subscribe(
        (err)=>{
          this.mess = 'Sai Email hoặc Password!';
          this.ismess = true;
        }
      );
    }

  
}
