import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, ValidatorFn, Validators } from '@angular/forms';
import { Status } from 'src/app/types/shared.types';

@Component({
  selector: 'app-new-password',
  templateUrl: './new-password.component.html',
  styleUrls: ['./new-password.component.scss']
})
export class NewPasswordComponent implements OnInit {
  password!: FormGroup;
  status: Status = Status.NORMAL;
  constructor() {
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

  resetPassword(){

  }
  
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
}
