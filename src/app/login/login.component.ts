import { Component } from '@angular/core';
import { LoginService } from '../services/login.service';
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

  constructor(private loginService: LoginService, private router: Router) {}

  onSubmit() {
    if (this.email && this.password) {
      this.loginService.login(this.email, this.password).subscribe({
        next: () => {
          alert('Login successful!');
          this.router.navigate(['/welcome']);
        },
        error: () => this.errorMessage = 'Invalid email or password'
      });
    } else {
      this.errorMessage = 'Please enter email and password';
    }
  }
}
