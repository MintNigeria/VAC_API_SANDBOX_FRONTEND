import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { IChangePassword, ICreatePassword, ILogin } from 'src/app/store/auth/index.types';
import { BaseURI } from '../shared/baseURI.shared';

abstract class AbstractAuthService {
  abstract login(data: ILogin): Observable<any>;
  abstract changePassword(payload: IChangePassword): Observable<any>;
  abstract forgotPassword(email: string): Observable<any>;
}

@Injectable({
  providedIn: 'root',
})
export class AuthService extends BaseURI implements AbstractAuthService {
  constructor(private http: HttpClient) {
    super();
  }

  login(payload: any) {
   
    let httpParams = new HttpParams({
        fromObject: {
            username: payload.email,
        password: payload.password,
        grant_type: 'password',
        scope: 'offline_access openid',
      },
    });
    let body = new HttpParams()
    .set('grant_type', 'password')
    .set('username', payload.email)
    .set('password', payload.password);
    if (payload.twoFA === true) {
      // httpParams.code = payload.code;
      httpParams = new HttpParams({
        fromObject: {
            username: payload.email,
        password: payload.password,
        code: payload.code,
        grant_type: 'password',
        scope: 'offline_access openid',
      },
    });
    }

    return this.http
      .post<any>(
        `${this.baseUrl2}mint-auth/api/v1/authentication/token?userType=${payload.userType}`,
        httpParams,
        {
          headers: { skip: 'true' },
        }
      )
      .pipe(map((res) => res));
  }

  changePassword(payload: IChangePassword) {
    return this.http.post(
      `${this.baseUrl}mint-auth/api/v1/authentication/changePassword`,
      payload
    );
  }

  resetPassword(payload: any) {
    return this.http.post(
      `${this.baseUrl}mint-auth/api/v1/Authentication/PasswordReset`,
      payload
    );
  }

  createPassword(payload: ICreatePassword) {
    return this.http.post(
      `${this.baseUrl}mint-auth/api/v1/Authentication/CreatePassword`,
      payload
    );
  }
  
  forgotPassword(email: string) {
    const body = new FormData()
    body.append('userName', email)
    return this.http.post<any>(
      `${this.baseUrl}mint-auth/api/v1/Authentication/RequestPasswordReset`, body
    );
  }
  createAccount(payload: any) {
    
    return this.http.post<any>(
      `${this.baseUrl}api/v1/Partner/RegisterPartner`, payload
    );
  }


  emailVerification(payload: any) {
    return this.http.post<any>(
      `${this.baseUrl2}mint-auth/api/v1/Authentication/EmailVerification`,
      payload
    );
  }

  resendOTP(email: string) {
    const body = new FormData()
    body.append('email', email)
    return this.http.post<any>(
      `${this.baseUrl2}mint-auth/api/v1/Authentication/RequestEmailVerification`, body
    );
  }

  


  logOut(payload: any) {
    return this.http
      .post<any>(
        `${this.baseUrl2}mint-auth/api/v1/authentication/Logout`, payload
      )
      .pipe(map((res) => res));
  }
  
}
