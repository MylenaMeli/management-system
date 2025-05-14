import { Component } from '@angular/core';
import { AuthService } from '../service/auth.service';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-login',
  imports: [FormsModule,CommonModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  email: string = '';
  password: string = '';
  errorMessage: string = '';

  constructor(private authService: AuthService, private router: Router) {}

  onLogin() {
    this.authService.login(this.email, this.password).subscribe({
      next: (response) => {
        console.log('Connexion réussie :', response);
        localStorage.setItem('token', response.token); // ou sessionStorage
        // Redirection après login (ex : tableau de bord)
        this.router.navigate(['/admin/']);
      },
      error: (error) => {
        console.error('Erreur de connexion :', error);
        this.errorMessage = error.error.error || 'Erreur lors de la connexion.';
      }
    });
  }
}
