import { Component } from '@angular/core';
import { Auth, signInWithEmailAndPassword } from '@angular/fire/auth';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  email: string = '';
  password: string = '';
  errorMessage: string = '';

  constructor(private auth: Auth, private router: Router) {}

  async login() {
    try {
      await signInWithEmailAndPassword(this.auth, this.email, this.password);
      console.log('Login successful');
      this.router.navigate(['/home']); // Redirect to home after successful login
    } catch (error) {
      // Type assertion to handle the error
      if (error instanceof Error) {
        this.errorMessage = error.message; // Access the message property
      } else {
        this.errorMessage = 'An unknown error occurred'; // Fallback for unknown errors
      }
      console.error('Login error:', error);
    }
  }
}