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
  passwordSecurityKnobValue: number = 50;
  passwordSecurityKnobClass: string = "";
  constructor(private formBuilder: FormBuilder,
    private authService: AuthService,
    private toastrService: ToastrService,
    private router: Router) { }

  ngOnInit(): void {
    this.createRegisterFrom();
    this.passwordSecurityControl();
  }
  createRegisterFrom() {
    this.registerForm = this.formBuilder.group({
      "email": ["", Validators.required],
      "password": ["", Validators.required],
      "nickName": ["", Validators.required],
      "firstName": ["", Validators.required],
      "lastName": ["", Validators.required],
      "passwordsecurity": ["", Validators.required]
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
        if (token.length > 0) {
          this.router.navigate(['/cars'])
        }
      }, responseError => {
        this.toastrService.info(responseError.message)
        console.log(responseError)
      });
    }
  }
  keyupPasswordEvent(event: any) {
    this.passwordSecurityControl();
    console.log(event.target.value);

  }
  passwordSecurityControl() {
    if (this.registerForm.value.password.length > 0) {
      this.passwordSecurityKnobClass = "visibility: visible;"
      this.passwordSecurityKnobValue =this.checkStrength(this.registerForm.value.password)
    } else {
      this.passwordSecurityKnobClass = "visibility: hidden;display: none;"
    }
  }
  checkStrength(password: string) {
    var strength = 0
    if (password.length > 7) strength += 1
    if (password.match(/([a-z].*[A-Z])|([A-Z].*[a-z])/))  strength += 1 
    if (password.match(/([a-zA-Z])/) && password.match(/([0-9])/))  strength += 1 
    if (password.match(/([!,%,&,@,#,$,^,*,?,_,~])/))  strength += 1
    if (password.match(/(.*[!,%,&,@,#,$,^,*,?,_,~].*[!,",%,&,@,#,$,^,*,?,_,~])/)) strength += 1
      return  (strength*2)*10;
  }

}
