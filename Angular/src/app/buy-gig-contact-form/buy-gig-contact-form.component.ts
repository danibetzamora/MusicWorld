import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'buy-gig-contact-form',
  templateUrl: './buy-gig-contact-form.component.html'
})
export class BuyGigContactFormComponent implements OnInit {

  contactForm = this.formBuilder.group({
    email: '',
    phone: '',
    message: ''
  });

  constructor(private formBuilder: FormBuilder) {

  }

  ngOnInit(): void {
  }

  submitContactForm(): void {
    let form = this.contactForm.value;

    console.log(form);

    alert("Contact Form Submit\nE-mail: "+form.email+"\nPhone no.: "+form.phone+"\nMessage: "+form.message);

    this.contactForm.reset();
  }

}
