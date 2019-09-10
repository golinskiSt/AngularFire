import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { AngularFirestore, validateEventsArray  } from '@angular/fire/firestore';
import { fbind } from 'q';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent implements OnInit {
  public form;
  public submitted = false
  constructor(
    private fb: FormBuilder,
    private auth: AngularFireAuth,
    private db: AngularFirestore ) {   }

  ngOnInit() {
    this.form = this.fb.group({
      email: new FormControl('', [Validators.email, Validators.required]),
      password: new FormControl('', Validators.required)
    });
  }

  onSubmit(){
    this.submitted = true;
  }
  get f() {
    return this.form.controls;
  }
}
