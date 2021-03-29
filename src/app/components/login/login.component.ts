import { Router, RouterModule, Routes } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup
  constructor(private formBuilder: FormBuilder,
    private authService: AuthService,
    private toastrService: ToastrService,
    private router: Router) { }


  ngOnInit(): void {
    this.createLoginFrom()
  }
  createLoginFrom() {
    this.loginForm = this.formBuilder.group({
      "email": ["", Validators.required,Validators.email],
      "password": ["", Validators.required]
    })
  }
  login() {
    if (this.loginForm.valid) {
      //console.log(this.loginForm.value)
      let loginModel = Object.assign({}, this.loginForm.value);
      this.authService.login(loginModel).subscribe(response => {
        this.toastrService.info(response.message)
        let token:string = String(response.data.token);
        localStorage.setItem("token", token);
        if(token.length>0){
          this.router.navigate(['/cars'])
        }
      }, responseError => {
        this.toastrService.info(responseError.message)
        //console.log(responseError)
      });
    }
  }
}
