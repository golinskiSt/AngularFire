import { Component, OnInit } from '@angular/core';
import { AuthService } from '../firebase-auth/auth/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  public isUserLogged: boolean;
  constructor(private authService: AuthService) { }

  ngOnInit() {
    this.isUserLogged = this.authService.isLoggedIn;
  }
  logoutUser() {
    this.authService.logout();
    this.isUserLogged = false;
  }
}
