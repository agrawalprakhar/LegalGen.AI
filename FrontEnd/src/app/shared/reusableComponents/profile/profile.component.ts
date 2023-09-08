import { Component } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from 'src/app/core/services/user.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent {
  updateProfile!: FormGroup;

  user: any;
  emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;

  constructor(
    private formBuilder: FormBuilder,
    private userservice: UserService
  ) {}

  ngOnInit(): void {
    this.initializeForm();
    this.getFormDetails();
  }

  initializeForm() {
    this.updateProfile = this.formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', Validators.required],
      contactDetails: ['', Validators.required],
      organization: ['', Validators.required],
    });
  }

  getControl(name: any): AbstractControl | null {
    return this.updateProfile.get(name);
  }

  getFormDetails() {
    let token = localStorage.getItem('token');
   

    this.userservice.getToken(token).subscribe((user) => {
      this.user = user;

      this.updateProfile.patchValue({
        firstName: this.user.firstName,
        lastName: this.user.lastName,
        email: this.user.email,
        contactDetails: this.user.contactDetails,
        organization: this.user.organization,
      });
    });
  }

  updateForm(data: any) {
    let token = localStorage.getItem('token');
    this.userservice.getToken(token).subscribe((user) => {
      data.password = user.password;
      data.actionToken = token;
      data.Id = user.id;

      this.userservice.updateProfile(user.id, data).subscribe();
      alert('Successfully Updated');
    });
  }
}
