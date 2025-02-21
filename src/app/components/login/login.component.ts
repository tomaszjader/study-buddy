import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  loginData = {
    username: '',
    password: ''
  };

  onSubmit() {
    // Handle login logic here
    console.log('Login attempt:', this.loginData);
  }
}
