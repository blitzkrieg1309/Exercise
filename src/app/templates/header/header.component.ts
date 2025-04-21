import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
})
export class HeaderComponent implements OnInit {
  loginStatus = false;

  constructor(private authservice: AuthService, private router: Router) {}

  ngOnInit(): void {
    this.loginStatus = this.authservice.isLoggedIn();
    this.checkExpiredToken();
  }

  checkExpiredToken() {
    if (this.authservice.isTokenEXpired()) {
      this.authservice.removeToken;
    }
  }

  logout() {
    this.authservice.removeToken();
    this.loginStatus = false;
    alert('Logged out successfully');
    this.router.navigate(['/login']);
  }
}
