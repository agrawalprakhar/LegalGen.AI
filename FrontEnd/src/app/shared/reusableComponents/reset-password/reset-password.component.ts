import { Component } from '@angular/core';
import {
  AbstractControl,
  FormBuilder,
  FormGroup,
  ValidationErrors,
  Validators,
} from '@angular/forms'; // Import these modules
import { Router } from '@angular/router';
import { UserService } from 'src/app/core/services/user.service';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.css']
})
export class ResetPasswordComponent {
  resetPasswordForm !: FormGroup;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.resetPasswordForm = this.formBuilder.group({
      newPassword: ['', [Validators.required]],
      confirmPassword: ['', [Validators.required]]
    }, {
      validators: this.passwordMatchValidator
    });
  }

  passwordMatchValidator(formGroup: FormGroup): ValidationErrors | null {
    const newPasswordControl = formGroup.get('newPassword');
    const confirmPasswordControl = formGroup.get('confirmPassword');
  
    if (newPasswordControl && confirmPasswordControl) {
      const newPassword = newPasswordControl.value;
      const confirmPassword = confirmPasswordControl.value;
  
      if (newPassword === confirmPassword) {
        return null; // Passwords match, validation is successful
      } else {
        confirmPasswordControl.setErrors({ passwordMismatch: true });
        return { passwordMismatch: true }; // Passwords don't match, return an error
      }
    }
  
    return null; // Default case: return null
  }
  

  onSubmit() {
    if (this.resetPasswordForm.valid) {
      // Implement your reset password logic here
    }
  }

}
