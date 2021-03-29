import { Component, OnInit } from '@angular/core';
import { Form, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  registerForm: FormGroup
  constructor(private formBuilder: FormBuilder,
    private authService: AuthService,
    private toastrService: ToastrService,
    private router:Router) { }

  ngOnInit(): void {
    this.createRegisterFrom();
  }
  createRegisterFrom() {
    this.registerForm = this.formBuilder.group({
      "email": ["", Validators.required],
      "password": ["", Validators.required],
      "nickName": ["", Validators.required],
      "firstName": ["", Validators.required],
      "lastName": ["", Validators.required],
    })
  }
  register() {
    if (this.registerForm.valid) {
      console.log(this.registerForm.value)
      let registerModel = Object.assign({}, this.registerForm.value);
      this.authService.register(registerModel).subscribe(response => {
        this.toastrService.info(response.message)
        let token: string = response.data.token;
        console.log(token);
        localStorage.clear()
        localStorage.setItem("token", token)
        console.log(response)
        if(token.length>0){
          this.router.navigate(['/cars'])
        }
      }, responseError => {
        this.toastrService.info(responseError.message)
        console.log(responseError)
      });
    }
  }
}
