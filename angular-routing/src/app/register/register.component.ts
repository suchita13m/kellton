import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor() { }
  @ViewChild('f') registerForm:NgForm;
  countries=['India','Argentina','UK'];
  defaultCountry='';
  mobNumberPattern = "^((\\+91-?)|0)?[0-9]{10}$";  
  submitted=false;
  infoMessage="Your account has been created.";
  ngOnInit() {  }


  onSubmit(){
    this.submitted = true;
  }

}
