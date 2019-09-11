import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { FirebaseAuthRoutingModule } from './firebase-auth-routing.module';
import { AuthComponent } from './auth/auth.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { RegisterComponent } from './register/register.component';
import { AuthService } from './auth/auth.service';


@NgModule({
  declarations: [
    AuthComponent,
    RegisterComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    FirebaseAuthRoutingModule,
    AngularFireModule,
    AngularFireAuthModule,
    AngularFirestoreModule
  ],
  providers: []
})
export class FirebaseAuthModule { }
