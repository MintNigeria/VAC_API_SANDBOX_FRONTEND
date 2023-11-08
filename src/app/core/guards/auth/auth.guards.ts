import { Injectable } from '@angular/core';
import {
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  Router,
  UrlTree,
} from '@angular/router';
import { Observable } from 'rxjs';
import { JwtHelperService } from '@auth0/angular-jwt';
import { StorageService } from '../../services/shared/storage.service';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  loggedInUser: any;

  constructor(private router: Router, private storageService: StorageService) {}
  canActivate():
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
      const authenticationToken: any = localStorage.getItem('token');
    const helper = new JwtHelperService();
    this.loggedInUser = helper.decodeToken(authenticationToken);

    if (this.loggedInUser.UserType !== 'Sandbox') {
      this.router.navigate(['/']);
      return false;
    }

    const expirationDate = helper.isTokenExpired(String(authenticationToken));
    if (expirationDate || !authenticationToken) {
      this.storageService.removeItem('token');
    }
    return true;
  }
}
