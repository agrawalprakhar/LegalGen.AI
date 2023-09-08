import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatSelectModule } from '@angular/material/select';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule , ReactiveFormsModule } from '@angular/forms';
import {  HttpClientModule } from '@angular/common/http';
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule}  from '@angular/material/input';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatDialogModule } from '@angular/material/dialog';

import { LoginComponent } from './pages/login/login.component';
import { SignupComponent } from './pages/signup/signup.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatCardModule} from '@angular/material/card';
import { LandingpageComponent } from './pages/landingpage/landingpage.component';
import { ProfileComponent } from './shared/reusableComponents/profile/profile.component';
import {MatIconModule} from '@angular/material/icon';
import { ResetPasswordComponent } from './shared/reusableComponents/reset-password/reset-password.component';
import { UpdatePasswordComponent } from './shared/reusableComponents/update-password/update-password.component';

import { SearchComponent } from './shared/reusableComponents/search/search.component';
import { SearchresultComponent } from './shared/reusableComponents/searchresult/searchresult.component';





@NgModule({
  declarations: [
    AppComponent,
    SignupComponent,
    LoginComponent,
    LandingpageComponent,
    ProfileComponent,

    ResetPasswordComponent,
    UpdatePasswordComponent,
    SearchComponent,
    SearchresultComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatCardModule,
    MatSelectModule,
    MatButtonModule,
    MatInputModule,
    MatIconModule,
    MatDatepickerModule,
    MatDialogModule,
    MatNativeDateModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
