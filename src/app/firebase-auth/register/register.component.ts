import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators, FormBuilder } from '@angular/forms';
import { AuthService } from '../auth/auth.service';
import { Info } from '../Info';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  public registerForm: FormGroup;
  public registerCredentials: UserCredentials;
  public success = false;
  public submitted = false;
  public errors: any;
  public loading = false;
  public send = false;
  constructor(private fb: FormBuilder,
              private authService: AuthService) { }

  ngOnInit() {
    this.registerForm = this.fb.group({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', Validators.required),
      confirmPassword: new FormControl('', Validators.required)
    });
  }

  onSubmit() {
    this.submitted = true;
    this.authService.registerAsync(
      this.registerForm.controls.email.value,
      this.registerForm.controls.password.value)
      .then( t => this.success = true)
      .catch(e => {
        this.errors = e;
        console.error(e.message);
      });
  }

  get f() {
    return this.registerForm.controls;
  }
}

export class UserCredentials {
  public email: string;
  public password: string;
  public confirmPassword: string;
}
