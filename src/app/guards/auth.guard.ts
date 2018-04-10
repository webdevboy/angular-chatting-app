import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { AuthenticationService } from '../services/authentication.service';

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(private _router: Router, private _authenticationService: AuthenticationService) {}
  
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    let isPage = next.data.isPage;

    if (this._authenticationService.isUserAuthorized()) {
      let types = next.data.types;
     
      if (this._authenticationService.hasUserPermission(types) && !isPage)
        return true;
      
      this._router.navigate(['/dashboard']);
      return true;
    }

    if(!isPage) {
      // not logged in so redirect to login page with the return url
      this._router.navigate(['/login'], { queryParams: { returnUrl: state.url }});
      return false;
    }
    return true;
  }
  
}
