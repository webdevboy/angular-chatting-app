import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from './components/login/login.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { RegisterComponent } from './components/register/register.component';
import { UserComponent } from './components/users/user/user.component';
import { UserProfileComponent } from './components/users/user-profile/user-profile.component';
import { UserFormComponent } from './components/users/user-form/user-form.component';
import { UserResetPasswordComponent } from './components/users/user-reset-password/user-reset-password.component';
import { AuthGuard } from './guards/index';

const appRoutes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/dashboard' },
  { path: 'dashboard', component: DashboardComponent, canActivate: [AuthGuard] },
  { path: 'login', component: LoginComponent, canActivate: [AuthGuard], data: { isPage: true } },
  { path: 'register', component: RegisterComponent, canActivate: [AuthGuard], data: { isPage: true } },
  // user
  { path: 'users', component: UserComponent, canActivate: [AuthGuard], data: { types: ['manager', 'admin'] } },
  { path: 'users/new', pathMatch: 'full', component: UserFormComponent, canActivate: [AuthGuard], data: { roles: ['manager', 'admin'] } },
  { path: 'users/profile', pathMatch: 'full', component: UserProfileComponent, canActivate: [AuthGuard] },
  { path: 'users/reset/:id', component: UserResetPasswordComponent, canActivate: [AuthGuard] },
  { path: 'users/:id', component: UserFormComponent, canActivate: [AuthGuard], data: { roles: ['manager', 'admin'] } },  
  
  // otherwise redirect to dashboard
  { path: '**', redirectTo: '' }
];

export const routing = RouterModule.forRoot(appRoutes);
