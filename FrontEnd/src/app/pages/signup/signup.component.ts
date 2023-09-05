import { Component } from '@angular/core';
import {
  AbstractControl,
  FormBuilder,
  FormGroup,
  Validators,
} from '@angular/forms'; // Import these modules
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
})
export class SignupComponent {
  signupForm: FormGroup;

  constructor(private fb: FormBuilder, private router: Router) {
    this.signupForm = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      organisation: ['', Validators.required],
      contactDetails : ['',Validators.required],
    });
  }
  getControl(name: any): AbstractControl | null {
    return this.signupForm.get(name);
  }
  onSubmit(data: any[]) {
    if (this.signupForm.valid) {
      // Handle form submission here
      console.log(this.signupForm.value);
    }
  }
  onReset() {
    this.signupForm.reset();
  }
}
