import { LocationStrategy } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, AbstractControl, ValidatorFn } from '@angular/forms';
import { Status } from 'src/app/types/shared.types';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.scss']
})
export class ResetPasswordComponent implements OnInit {
  password!: FormGroup;
  status: Status = Status.NORMAL;
  constructor(private location:LocationStrategy) { 
    this.initForgotForm();
    this.password.addValidators(
      this.validatePassword(this.newPasswordGroup, this.newConfirmPasswordGroup)
    );
  }

  ngOnInit(): void {
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
  get newPasswordGroup(): FormGroup {
    return this.password?.get('newPassword') as FormGroup;
  }

  get newConfirmPasswordGroup(): FormGroup {
    return this.password?.get('confirmPassword') as FormGroup;
  }

  clearInput(controlName: string) {
    this.password.patchValue({
      [controlName]: '',
    });
  }
  resetPassword() {}
  validatePassword(
    password: AbstractControl,
    confirmPassword: AbstractControl
  ): ValidatorFn {
    return () => {
      if (password.value !== confirmPassword.value) {
        return { match_error: 'Value does not match' };
      }
      return null;
    };
  }
  back(){
    this.location.back()
  }
}
