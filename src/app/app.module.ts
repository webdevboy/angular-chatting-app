import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HttpModule } from '@angular/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CustomFormsModule } from 'ng2-validation'
import { CollapseModule } from 'ngx-bootstrap/collapse';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { ToastrModule } from 'ngx-toastr';
import { GooglePlaceModule } from "ngx-google-places-autocomplete";

import { routing } from './app.routing';

import { AuthGuard } from './guards/index';
import { AuthenticationService, UserService } from './services/index';

import { AppComponent } from './app.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { UserComponent } from './components/users/user/user.component';
import { IsAllowingPipe } from './pipes/is-allowing.pipe';
import { UserFormComponent } from './components/users/user-form/user-form.component';
import { UserResetPasswordComponent } from './components/users/user-reset-password/user-reset-password.component';
import { UserProfileComponent } from './components/users/user-profile/user-profile.component';
import { PasswordStrengthBarComponent } from './components/users/password-strength-bar/password-strength-bar.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    LoginComponent,
    RegisterComponent,
    UserComponent,
    IsAllowingPipe,
    UserFormComponent,
    UserResetPasswordComponent,
    UserProfileComponent,
    PasswordStrengthBarComponent
  ],
  imports: [
    BrowserModule,
    RouterModule,
    HttpModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    CustomFormsModule,
    ToastrModule.forRoot(), // ToastrModule added
    CollapseModule.forRoot(),
    BsDropdownModule.forRoot(),
    GooglePlaceModule,
    routing
  ],
  providers: [
    AuthGuard,
    AuthenticationService,
    UserService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
