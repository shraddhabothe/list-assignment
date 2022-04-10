import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from  '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  username : string = '';
  password : string = '';
  constructor(private authService:AuthService,private router:Router ) { }

isLoggedIn = false;
isLoginFailed = false;
errorMessage = '';

ngOnInit(): void {
  if (localStorage.getItem("token")) {
    this.isLoggedIn = true;
  }
}
onSubmit(formValue : NgForm): void {
  //const { username, password } = this.form;

  this.authService.login(this.username, this.password).subscribe(
    data => {
      localStorage.setItem("token",data.token)
      this.isLoginFailed = false;
      this.isLoggedIn = true;
      this.reloadPage();
    },
    err => {
      this.errorMessage = err.error.message;
      this.isLoginFailed = true;
    }
  );
}
reloadPage(): void {
  this.router.navigateByUrl("/dashboard");
}

}
