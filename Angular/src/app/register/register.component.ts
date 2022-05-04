import { emitDistinctChangesOnlyDefaultValue } from '@angular/compiler';
import { Component, OnInit, ViewChild , AfterViewInit, ElementRef } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { RouterLink } from '@angular/router';
import $ from 'jquery';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  loginForm = this.formBuilder.group({
    name: "", lastname: "", email: "", address: "", password1: "", password2: ""
});

  submitLoginForm(): void{
    let form = this.loginForm.value;
    console.log(form);
  }

  constructor(private formBuilder : FormBuilder, private elementRef : ElementRef) { }

  ngOnInit(): void {

  }

  ngAfterViewInit(){

    var button = this.elementRef.nativeElement.querySelector("#send");
            button.addEventListener("click", this.sendit);
            var form = this.elementRef.nativeElement.querySelector("form[name='register']");
            form.addEventListener("invalid", this.validation, true);
            form.addEventListener("input", this.checkval);
        
  }

  sendit(){
    let form = $("form[name='register']");
    var valid = (<HTMLInputElement>document.querySelector("form[name='register']")).checkValidity();
    let password1 = <HTMLInputElement>document.getElementById('password1');
    let password2 = <HTMLInputElement>document.getElementById('password2');
  

    if(valid && password1.value == password2.value) {
        alert('¡Login successfully!');
        form.submit();
        location.replace("/login");
    } else if(password1.value != password2.value) {
      alert('Passwords do not match');
      password1.value="";
      password2.value="";
      password1.style.background = '#FFDDDD';
      password2.style.background = '#FFDDDD';
    } else {
        alert('You must fill in all fields and take into account the format of each one. (If you hover the mouse pointer over each one you can get more information about it).');
    } 

    
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