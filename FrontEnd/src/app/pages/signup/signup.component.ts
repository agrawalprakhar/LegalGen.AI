import { Component } from '@angular/core';
import {
  AbstractControl,
  FormBuilder,
  FormGroup,
  Validators,
} from '@angular/forms'; // Import these modules
import { Router } from '@angular/router';
import { UserService } from 'src/app/core/services/user.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
})
export class SignupComponent {
  signupForm: FormGroup;
  respdata : any;

  constructor(private fb: FormBuilder, private router: Router,private userService : UserService) {
    this.signupForm = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      organization: ['', Validators.required],
      contactDetails: ['', [Validators.required, Validators.minLength(10)]],
    });
  }
  getControl(name: any): AbstractControl | null {
    return this.signupForm.get(name);
  }
  onSubmit() {
    debugger
    if (this.signupForm.valid) {
      // Handle form submission here
  
      
      this.userService.registerUser(this.signupForm.value).subscribe((item)=>{
     
        
        this.respdata = item;
        console.log(this.respdata);
        
        if(this.respdata != null){

          alert("You are Sucessfully Registered");
          this.router.navigateByUrl('/login');
          console.log(this.signupForm.value);
        }
        else {

          alert('Something Went Wrong Please Try Again.');
        }
      },
      // (error) => {
      //   // Handle HTTP error here
      //   console.error(error);
      //   alert('An error occurred while registering. Please try again later.');
      // }
      );
    }
  }
  onReset() {
    this.signupForm.reset();
  }
}
