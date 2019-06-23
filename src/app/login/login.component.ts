import { Component, OnInit } from '@angular/core';
import {ReactiveFormsModule} from '@angular/forms';
import {FormGroup,FormBuilder,Validators} from '@angular/forms';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
Loginform:FormGroup;
  constructor(private fb:FormBuilder) {
    this.Loginform = this.fb.group({
      login:['',Validators.required],
      pwd:['',Validators.required]  
    }) }

  ngOnInit() {
  }

}
