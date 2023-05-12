import { LocationStrategy } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Status } from 'src/app/types/shared.types';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.scss']
})
export class ForgotPasswordComponent implements OnInit {
  forgotPassword!: FormGroup;
  status: Status = Status.NORMAL;
  currentState: string = 'forgot-password';

  constructor(    private location: LocationStrategy,
    ) { }

  ngOnInit(): void {
    this.initForgotForm();
  }

  initForgotForm() {
    this.forgotPassword = new FormGroup({
      identifier: new FormControl('', [Validators.required, Validators.email]),
    });
  }

  clearInput(controlName: string) {
    this.forgotPassword.patchValue({
      [controlName]: '',
    });
  }

  resetPassword(){}
  back() {
    this.location.back();
  }
}
