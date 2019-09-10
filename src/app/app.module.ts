import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule, FormsModule} from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ShowDirective } from './navbar/show.directive';
import { ShowNavDirective } from './navbar/show-nav.directive';
import { HomeComponent } from './home/home.component';
import { AuthComponent } from './firebase-auth/auth/auth.component';
import { FirebaseAuthModule } from './firebase-auth/firebase-auth.module';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { environment } from 'src/environments/environment';
@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ShowDirective,
    ShowNavDirective,
    HomeComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FirebaseAuthModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule, // imports firebase/firestore, only needed for database features
    AngularFireAuthModule, // imports firebase/auth, only needed for auth features,
    AngularFireStorageModule
  ],
  providers: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
