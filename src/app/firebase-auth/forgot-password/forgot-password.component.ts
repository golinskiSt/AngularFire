import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth/auth.service';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { Info } from '../Info';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.scss']
})
export class ForgotPasswordComponent implements OnInit {
  public success = false;
  public submitted = false;
  public errors: any;
  public loading = false;
  public send = false;
  public form;
  constructor(private authService: AuthService, private fb: FormBuilder) {
    this.form = this.fb.group ({
      email: new FormControl('', [Validators.required, Validators.email])
    });
  }

  ngOnInit() {
  }
  onSubmit() {
    this.submitted = true;
    this.loading = true;
    this.authService.sendPasswordResetEmail(this.form.controls.email.value)
    .then(
      () => {
        this.send = true;
        this.loading = false;
      })
    .catch( e => this.errors = e);
  }

  get f() {
    return this.form.controls;
  }
}
