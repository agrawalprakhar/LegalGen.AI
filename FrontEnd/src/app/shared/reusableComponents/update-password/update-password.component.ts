import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-update-password',
  templateUrl: './update-password.component.html',
  styleUrls: ['./update-password.component.css']
})
export class UpdatePasswordComponent {
  updatePasswordForm !: FormGroup;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.updatePasswordForm = this.formBuilder.group({
      currentPassword: ['', [Validators.required]],
      newPassword: ['', [Validators.required]],
      confirmPassword: ['', [Validators.required]]
    }, {
      validators: this.passwordMatchValidator
    });
  }

  passwordMatchValidator(formGroup: FormGroup) {
    const currentPasswordControl = formGroup.get('currentPassword');
    const newPasswordControl = formGroup.get('newPassword');
    const confirmPasswordControl = formGroup.get('confirmPassword');
  
    if (currentPasswordControl && newPasswordControl && confirmPasswordControl) {
      const currentPassword = currentPasswordControl.value;
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
    if (this.updatePasswordForm.valid) {
      // Implement your update password logic here
    }
  }
}
