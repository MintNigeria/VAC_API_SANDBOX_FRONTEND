import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { LoginComponent } from './login/login.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { NewPasswordComponent } from './new-password/new-password.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { EmailSentComponent } from 'src/app/components/auth/email-sent/email-sent.component';
import { ResetPasswordComponent } from './reset-password/reset-password.component';
import { SignUpEmailComponent } from 'src/app/components/auth/sign-up-email/sign-up-email.component';
import { AuthComponent } from './auth.component';
import { AppButtonComponent } from 'src/app/shared/components/app-button/app-button.component';
import { AppNumberInputComponent } from 'src/app/shared/components/app-number-input/app-number-input.component';
import { AppPasswordInputComponent } from 'src/app/shared/components/app-password-input/app-password-input.component';
import { AppTextInputComponent } from 'src/app/shared/components/app-text-input/app-text-input.component';


@NgModule({
  declarations: [
    AuthComponent,
    LoginComponent,
    SignUpComponent,
    NewPasswordComponent,
    ForgotPasswordComponent,
    ResetPasswordComponent
  ],
  imports: [
    CommonModule,
    AuthRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    AppButtonComponent,
    AppTextInputComponent,
    AppPasswordInputComponent,
    AppNumberInputComponent,
    EmailSentComponent,
    SignUpEmailComponent,
  ]
})
export class AuthModule { }
