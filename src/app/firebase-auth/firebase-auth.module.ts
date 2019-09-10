import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FirebaseAuthRoutingModule } from './firebase-auth-routing.module';
import { AuthComponent } from './auth/auth.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AuthComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    FirebaseAuthRoutingModule
  ]
})
export class FirebaseAuthModule { }
