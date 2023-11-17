import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { JwtHelperService } from '@auth0/angular-jwt';
import { Actions, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import {
  Container,
  EnterExitLeft,
  EnterFromTop,
} from 'src/app/animations/animations';
import { NotificationsService } from 'src/app/core/services/shared/notifications.service';
import { SingleSessionModalComponent } from 'src/app/shared/components/single-session-modal/single-session-modal.component';
import { invokeLoginUser, loginSuccess, logoutAction } from 'src/app/store/auth/action';
import { AppStateInterface } from 'src/app/types/appState.interface';
import { Status } from 'src/app/types/shared.types';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  animations: [Container, EnterFromTop, EnterExitLeft],
})
export class LoginComponent implements OnInit {
  loginAuth!: FormGroup;
  status: Status = Status.NORMAL;
  loggedInUser: any;

  constructor( 
    private router: Router,
    private store: Store,
    private appStore: Store<AppStateInterface>,
    private actions$: Actions,
    private notificationService: NotificationsService,
    private dialog: MatDialog,
    ) { }

  ngOnInit(): void {
    this.initLoginForm(); 
    this.store.dispatch(logoutAction());

  }

  clearInput(controlName: string) {
    this.loginAuth.patchValue({
      [controlName]: '',
    });
  }
  initLoginForm() {
    this.loginAuth = new FormGroup({
      password: new FormControl('', [
        Validators.required,
        Validators.minLength(8),
      ]),
      email: new FormControl(
        '',
        Validators.compose([Validators.pattern(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/), Validators.required])
      ),
      userType: new FormControl(5),
    });
  }
  loginAdmin(){
    this.status = Status.LOADING;
    this.store.dispatch(invokeLoginUser({payload: this.loginAuth.value}));
    this.actions$.pipe(ofType(loginSuccess)).subscribe((res: any) => {
      if (res.accessToken !== undefined) {
        const helper = new JwtHelperService();
        this.loggedInUser = helper.decodeToken(res.accessToken);
        const data =  {
          isAuthenticated: true,
          user: {
            firstName: this.loggedInUser.given_name,
            lastName: this.loggedInUser.family_name,
            email: this.loggedInUser.email,
            id: this.loggedInUser.id,
            institutionId: this.loggedInUser.InstitutionId,
            lastLogin: this.loggedInUser.last_login_time,
            name: this.loggedInUser.name,
            phoneNumber: this.loggedInUser.phone_number,
            userType: this.loggedInUser.UserType,
            role: this.loggedInUser?.role || 'undefined',
          },
    
        };
        
        if (this.loggedInUser.UserType === 'Sandbox') {
          localStorage.setItem('userData', JSON.stringify(this.loggedInUser));
          localStorage.setItem('authData', JSON.stringify(data));
          this.notificationService.publishMessages('success', 'Login Successful');
          this.router.navigateByUrl("/main")
        }  else if (this.loggedInUser.UserType !== 'Sandbox') {
          this.notificationService.publishMessages('error', 'Invalid login credential');
          // localStorage.clear()
        }
      } else if (res.accessToken === undefined && res.hasErrors === true && res.errors[0] === 'You have an active session!!!') {
        this.launchSingleLoginModal(this.loginAuth.value)

      }

    })
  }


  launchSingleLoginModal(data: any) {
    const dialogRef = this.dialog.open(SingleSessionModalComponent, {
      // width: '600px',
      // height: '600px'
      data,
      disableClose: true 
    });
  }
}
