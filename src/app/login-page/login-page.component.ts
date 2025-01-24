import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { InputFieldComponent } from '../input-field/input-field.component';
import { ButtonComponent } from '../button/button.component';
import { AuthService } from '../AuthService/auth.service';
import {
  ReactiveFormsModule,
  FormBuilder,
  FormGroup,
  Validators,
  FormControl,
} from '@angular/forms';
import { IconComponent } from "../icon/icon.component";

@Component({
  selector: 'app-login-page',
  standalone: true,
  imports: [ReactiveFormsModule, InputFieldComponent, ButtonComponent, IconComponent],
  templateUrl: './login-page.component.html',
  styleUrl: './login-page.component.css',
})
export class LoginPageComponent implements OnInit {
  loginForm: FormGroup;

  constructor(
    private authService: AuthService,
    private router: Router,
    private fb: FormBuilder
  ) {
    this.loginForm = this.fb.group({
      username: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(8)]],
    });
  }

  ngOnInit(): void {}

  onSubmit(): void {
    if (this.loginForm.valid) {
      this.authService.login(this.loginForm.value).subscribe({
        next: (response) => {
          console.log('Login successful', response);
          localStorage.setItem('token', response.token);
          this.router.navigate(['/home-page']);
        },
        error: (error) => {
          alert('Login failed');
          console.error('Error:', error);
        },
        complete: () => {
          console.log('Login process complete.');
        }
      });
    } else {
      console.log('Form is invalid');
    }
  }
  
  getControl(name: string): FormControl {
    return this.loginForm.get(name) as FormControl;
  }
}
