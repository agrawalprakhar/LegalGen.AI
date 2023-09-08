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

  constructor(private fb: FormBuilder, private userService: UserService, private router: Router) { }

  ngOnInit() {
    this.resetPasswordForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
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
      const emailControl = this.resetPasswordForm.get('email');
  const newPasswordControl = this.resetPasswordForm.get('newPassword');

  if (emailControl && newPasswordControl && emailControl.valid && newPasswordControl.valid) {
    const email = emailControl.value;
    const newPassword = newPasswordControl.value;

    // Call the API to reset the password using the UserService
    this.userService.resetPassword(email, newPassword).subscribe(
      (response) => {
        // Handle successful reset
        console.log('Password reset successful:', response);
       

        // You can navigate to a success page or display a success message
        // Here, we navigate to a success page after 2 seconds
        setTimeout(() => {
          this.router.navigate(['/login']);
        }, 2000);
      },
      (error) => {
        // Handle error, e.g., display an error message to the user
        console.error('Password reset failed:', error);

        // You can display an error message to the user or handle it as needed
      }
    );
  } else {
    // Handle the case where form controls are invalid or not found
    // You can display an error message or handle it as needed
    console.error('Invalid form data or form controls not found.');
  }
    }
  }
}
