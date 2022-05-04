import { Component, OnInit, ViewChild , AfterViewInit, ElementRef} from '@angular/core';
import { FormBuilder } from '@angular/forms';
import $ from 'jquery';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
loginForm = this.formBuilder.group({
  email: "", password:""
});


submitLoginForm(): void{
  let form = this.loginForm.value;
  console.log(form);
}

  constructor(private formBuilder : FormBuilder, private elementRef : ElementRef) { }

  ngOnInit(): void {
  }

  ngAfterViewInit(){

    var button = this.elementRef.nativeElement.querySelector("#loginButton");
            button.addEventListener("click", this.sendit);
            var form = this.elementRef.nativeElement.querySelector("form[name='login']");
            form.addEventListener("invalid", this.validation, true);
            form.addEventListener("input", this.checkval);
        
  }

  sendit(){
    let form = $("form[name='login']");
    var valid = (<HTMLInputElement>document.querySelector("form[name='login']")).checkValidity();

    if(valid) {
        alert('¡Login successfully!');
        form.submit();
        location.replace("/allGigs");
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



