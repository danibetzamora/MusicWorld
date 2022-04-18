import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
registerForm = this.formBuilder.group({
name:"",lastName:"",email:"",address:"",password:"",password2:""
});


submitRegisterForm( ): void {
  let form = this.registerForm.value;
  console.log(form);

}

  constructor(private formBuilder : FormBuilder) { }

  ngOnInit(): void {
  }

}
