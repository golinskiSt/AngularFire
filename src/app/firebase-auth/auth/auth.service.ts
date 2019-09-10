import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { auth } from 'firebase/app';
import { AngularFireAuth } from '@angular/fire/auth';
import { User } from 'firebase';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  public user: User;
  constructor(public afAuth: AngularFireAuth, public router: Router) {
    this.afAuth.authState.subscribe(user => {
      if (user) {
        this.user = user;
        localStorage.setItem('user', JSON.stringify(this.user));
      } else {
        localStorage.setItem('user', null);
      }
    });
  }
  async loginAsync(email: string, password: string) {
    const result = await this.afAuth.auth.createUserWithEmailAndPassword(
      email,
      password
    );
    if (result) {
      this.router.navigate(['/home']);
      return true;
    } else {
      return false;
    }
  }
  async registerAsync(email: string, password: string) {
    const result = await this.afAuth.auth.createUserWithEmailAndPassword(
      email,
      password
    );
    if (result) {
      await this.afAuth.auth.currentUser.sendEmailVerification();
      return true;
    } else {
      return false;
    }
  }
  async sendPasswordResetEmail(passwordResetEmail: string) {
    return await this.afAuth.auth.sendPasswordResetEmail(passwordResetEmail);
  }
  async logout() {
    await this.afAuth.auth.signOut();
    localStorage.removeItem('user');
    this.router.navigate(['/home']);
  }
  get isLoggedIn(): boolean {
    const user = JSON.parse(localStorage.getItem('user'));
    return user !== null;
  }
}
