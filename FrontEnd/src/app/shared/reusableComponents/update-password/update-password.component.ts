import { Component } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from 'src/app/core/services/user.service';

@Component({
  selector: 'app-update-password',
  templateUrl: './update-password.component.html',
  styleUrls: ['./update-password.component.css']
})
export class UpdatePasswordComponent {
  updatePasswordForm !: FormGroup;

  constructor(private route: ActivatedRoute,
    private formBuilder: FormBuilder,
    private userservice: UserService,
    private router : Router) { }

  ngOnInit() {
    this.updatePasswordForm = this.formBuilder.group({
    
      newPassword: ['', [Validators.required]],
      confirmPassword: ['', [Validators.required]]
    }, {
      validators: this.passwordMatchValidator
    });
  }

  passwordMatchValidator(formGroup: FormGroup) {
    
    const newPasswordControl = formGroup.get('newPassword');
    const confirmPasswordControl = formGroup.get('confirmPassword');
  
    if ( newPasswordControl && confirmPasswordControl) {
      
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
  getControl(name: any): AbstractControl | null {
    return this.updatePasswordForm.get(name);
  }

  onSubmit(password:string) {
    if (this.updatePasswordForm.valid) {
      // Implement your update password logic here
      let token = this.route.snapshot.paramMap.get('token');
      this.userservice.updatePassword(password, token).subscribe();
      alert('Successfully Updated the password');
      this.router.navigateByUrl('/register');
    }
    }
  }

