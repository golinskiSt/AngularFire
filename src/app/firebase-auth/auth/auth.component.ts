import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent implements OnInit {
  public form=new FormGroup({
    email: new FormControl(''),
    password: new FormControl('')
  });

  constructor(private auth: firebase.auth.EmailAuthProvider) {   }

  ngOnInit() {  
  }
  getForm(){
    return this.form;
  }

  onSubmit(){
    this.auth.providerId
  }
}
