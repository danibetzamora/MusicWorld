import { Component, OnInit, ViewChild , AfterViewInit, ElementRef} from '@angular/core';
import { FormBuilder } from '@angular/forms';
import $ from 'jquery';
import {UserService} from "../services/user.service";
import {User} from "../services/user.model";
import { Router } from '@angular/router';
import * as sha512 from 'js-sha512';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm = this.formBuilder.group({
    email: "", password:""
  });

  users: User[] = [];


submitLoginForm(): void{
  let form = this.loginForm.value;
  console.log(form);
}

  constructor(private formBuilder : FormBuilder, private elementRef : ElementRef, private userService : UserService,
    private router : Router,) { }

  ngOnInit(): void {
    this.getUsers();
  }

  public getUsers(){
    this.userService.getList().subscribe(
      (res: any) => this.users = res.map(
        (item: any) => ({ ...item.data(), 'id': item.id})
      ) as User[]
    );
  }

  ngAfterViewInit(){
    var form = this.elementRef.nativeElement.querySelector("form[name='login']");
    form.addEventListener("invalid", this.validation, true);
    form.addEventListener("input", this.checkval);
  }

  sendit(){
    let form = $("form[name='login']");
    var valid1 = (<HTMLInputElement>document.querySelector("form[name='login']")).checkValidity();
    let email = <HTMLInputElement>document.getElementById('email');
    let password = <HTMLInputElement>document.getElementById('password');
    let passwordHashed = sha512.sha512(password.value);
    let valid2 = false;
    let valid3 = false;
    
    this.users.forEach( (user) => {
      if(user.email == email.value) {
        valid2 = true;

        if(user.password == passwordHashed) {
          valid3 = true;
        }
      }
    });

    if(valid1 && valid2 && valid3) {
        alert('¡Login successfully!');
        this.router.navigate(['/allGigs']);
    } else if (valid1 == false){
        alert('You must fill in all fields and take into account the format of each one. (If you hover the mouse pointer over each one you can get more information about it).');
        email.value = password.value = "";
        email.style.background = password.style.background = '#FFDDDD';
    } else if(valid2 == false){
        alert('User not registered');
        email.value = password.value = "";
        email.style.background = password.style.background = '#FFDDDD';
    } else {
      alert('Password incorrect');
        password.value = "";
        password.style.background = '#FFDDDD';
    }
  }

  validation(e: any){
    var elem = e.target;
    elem.style.background = '#FFDDDD';
  }

  checkval(e: any){
    var elem = e.target;

    if(elem.validity.valid) {
      elem.style.background = '#96FF8D';
    } else {
      elem.style.background = '#FFDDDD';
    }
  }



}



