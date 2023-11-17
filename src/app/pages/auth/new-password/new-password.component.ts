import { Component, OnInit } from '@angular/core';
import {
  AbstractControl,
  FormBuilder,
  FormControl,
  FormGroup,
  ValidatorFn,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { Actions, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { NotificationsService } from 'src/app/core/services/shared/notifications.service';
import { emailVerification, emailVerificationSuccess, resendOTP, resendOTPSuccess } from 'src/app/store/auth/action';
import { AppStateInterface } from 'src/app/types/appState.interface';
import { Status } from 'src/app/types/shared.types';

@Component({
  selector: 'app-new-password',
  templateUrl: './new-password.component.html',
  styleUrls: ['./new-password.component.scss'],
})
export class NewPasswordComponent implements OnInit {
  password!: FormGroup;
  status: Status = Status.NORMAL;
   otplength: any;
  otpValue: any;

  constructor(
    private fb: FormBuilder, 
    private store: Store,
    private actions$: Actions,
    private appStore: Store<AppStateInterface>,
    private router: Router,
    private notificationService: NotificationsService
  ) {
    this.initForgotForm();
    // this.password.addValidators(
    //   // this.validatePassword(this.newPasswordGroup, this.newConfirmPasswordGroup)
    // );
  }

  ngOnInit(): void {
    this.timer(0.1)

  }
  initForgotForm() {
    this.password = new FormGroup({
      newPassword: new FormControl('', [
        Validators.required,
        Validators.minLength(8),
      ]),
      confirmPassword: new FormControl('', [
        Validators.required,
        Validators.minLength(8),
      ]),
    });
  }


  onOtpChange(event: any) {
    this.otplength = event
    this.otpValue = event;
  }
  
  resetPassword() {
     const email = sessionStorage.getItem('email')

    const payload = {
      userName: 'demotestuser@yopmail.com',
      code: this.otpValue
    }
    
    this.store.dispatch(emailVerification({payload}))
    this.actions$.pipe(ofType(emailVerificationSuccess)).subscribe((res: any) => {
      if (res.payload.hasErrors === false) {
        // this.showOTPPage = true;

        this.router.navigateByUrl('/')
      }
    })
  }

  timeDisplay!: string;
  hideResend: boolean = false;

  timer(minute: any) {
    // let min = minute;
    let seconds: number = minute * 60;
    let textSec: any = "0";
    let statSec: number = 60;

    const prefix = minute < 10 ? "0" : "";

    const timer = setInterval(() => {
      seconds--;
      if (statSec != 0) statSec--;
      else statSec = 59;  

      if (statSec < 10) {
        textSec = "0" + statSec;
      } else textSec = statSec;

      this.timeDisplay = `${prefix}${Math.floor(seconds / 60)}:${textSec}`;
      if (seconds == 0 ) {
        clearInterval(timer);
        this.hideResend = true;
      } else {
        this.hideResend = false;

      }
    }, 1000);
  }


  resendOTP() {
    const userEmail = sessionStorage.getItem('email')

    this.store.dispatch(resendOTP({email: 'demotestuser@yopmail.com'}))
    this.actions$.pipe(ofType(resendOTPSuccess)).subscribe((res: any) => {
      if (res.message.hasErrors === false) {
        this.notificationService.publishMessages('success', res.message.description);
        this.timer(3)
      }
    })
  }

 
}
