import { Component } from '@angular/core';
import {
  AbstractControl,
  FormBuilder,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/core/services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  loginForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private userService: UserService
  ) {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
    });
  }
  getControl(name: any): AbstractControl | null {
    return this.loginForm.get(name);
  }

  onSubmit(data: any[]) {
    if (this.loginForm.valid) {
      // Handle login form submission here
      console.log(this.loginForm.value);
      // this.userService.login(data)
    }
  }
  loginWithGoogle() {}
}
