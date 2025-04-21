import { Component } from '@angular/core';
import { HeaderComponent } from '../../templates/header/header.component';
import { FooterComponent } from '../../templates/footer/footer.component';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-register',
  imports: [HeaderComponent, FooterComponent, FormsModule, RouterModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css',
})
export class RegisterComponent {
  regisData = {
    username: '',
    email: '',
    password: '',
    confirmPassword: '',
  };

  errorMessage: string = '';
  isLoading: boolean = false;
  successMessage: string = '';

  constructor(private authService: AuthService, private router: Router) {}

  onSubmit(): void {
    if (this.regisData.password !== this.regisData.confirmPassword) {
      this.errorMessage = 'Password and confirm password must be the same';
      return; // ⬅️ tambahkan ini!
    }

    this.isLoading = true;
    this.errorMessage = '';
    this.successMessage = '';

    this.authService
      .register({
        username: this.regisData.username,
        password: this.regisData.password,
        email: this.regisData.email,
      })
      .subscribe({
        next: () => {
          this.isLoading = false;
          this.successMessage = 'Registration successful';
          this.router.navigate(['/login']);
        },
        error: (error) => {
          this.isLoading = false;
          this.errorMessage = error.error.message || 'Registration failed';
        },
      });
  }
}
