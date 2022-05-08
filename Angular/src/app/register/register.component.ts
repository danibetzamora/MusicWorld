import { emitDistinctChangesOnlyDefaultValue } from '@angular/compiler';
import { Component, OnInit, ViewChild , AfterViewInit, ElementRef } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { RouterLink } from '@angular/router';
import $ from 'jquery';
import {UserService} from "../../services/user.service";
import {User} from "../../services/user.model";
import { Router } from '@angular/router';
import * as sha512 from 'js-sha512';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  registerForm = this.formBuilder.group({
    name: "", surname: "", email: "", address: "", password1: "", password2: ""
  });

  constructor(
    private formBuilder : FormBuilder,
    private elementRef : ElementRef,
    private userService : UserService,
    private router : Router,
  ) {}

  ngOnInit(): void {}

  register() {
    let valid = (<HTMLInputElement>document.querySelector("form[name='register']")).checkValidity();
    let password1 = <HTMLInputElement>document.getElementById('password1');
    let password2 = <HTMLInputElement>document.getElementById('password2');

    if(valid && password1.value == password2.value) {

      let form = this.registerForm.value;

      let user = {
        email: form.email,
        password: sha512.sha512(form.password1),
        name: form.name,
        surname: form.surname,
        address: form.address,
      } as User;

      this.userService.create(user).then(
        (res) => {
          user.id = res.id;

          localStorage.setItem('user', JSON.stringify(user));
        }
      );

      this.router.navigate(['/login']);

    } else if(password1.value != password2.value) {
      alert('Passwords do not match');
      password1.value = password2.value = "";
      password1.style.background = password2.style.background = '#FFDDDD';
    } else {
      alert('You must fill in all fields and take into account the format of each one. (If you hover the mouse pointer over each one you can get more information about it).');
    }
  }

  ngAfterViewInit(){
    var form = this.elementRef.nativeElement.querySelector("form[name='register']");
    form.addEventListener("invalid", this.validation, true);
    form.addEventListener("input", this.checkval);
  }

  validation(e: any){
    var elem = e.target;
    elem.style.background = '#FFDDDD';
  }

  checkval(e: any){
    var elem = e.target;

    if(elem.validity.valid){
        elem.style.background = '#96FF8D';
    }else{
        elem.style.background = '#FFDDDD';
    }
  }

}