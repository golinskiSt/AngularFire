import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from './auth.service';
import { Router } from '@angular/router';
import { Info } from '../Info';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent implements OnInit {
  public form;
  public success = false;
  public submitted = false;
  public errors: any;
  public loading = false;
  public send = false;
  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private router: Router, ) {   }

  ngOnInit() {
    this.form = this.fb.group({
      email: new FormControl('', [Validators.email, Validators.required]),
      password: new FormControl('', Validators.required)
    });
  }

  onSubmit() {
    this.submitted = true;
    this.loading = true;
    this.authService.loginAsync(
      this.form.controls.email.value,
      this.form.controls.password.value
    ).then(t => {
      window.location.reload();
      this.router.navigate(['/home']);
      this.loading = false;
    })
    .catch(e => {
      console.error(e);
      this.errors = e.message;
    });
  }
  get f() {
    return this.form.controls;
  }
}
