import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from './auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent implements OnInit {
  public form;
  public submitted = false;
  public error: string;
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
    this.authService.loginAsync(
      this.form.controls.email.value,
      this.form.controls.password.value
    ).then(t => {
      window.location.reload();
      this.router.navigate(['/home']);
    })
    .catch(e => {
      console.error(e);
      this.error = e.message;
    });
  }
  get f() {
    return this.form.controls;
  }
}
