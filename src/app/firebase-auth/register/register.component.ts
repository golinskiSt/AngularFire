import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators, FormBuilder } from '@angular/forms';
import { AuthService } from '../auth/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  public registerForm: FormGroup;
  public registerCredentials: UserCredentials;
  public submitted = false;
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
      .then()
      .catch();
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
