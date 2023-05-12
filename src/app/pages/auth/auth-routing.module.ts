import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { NewPasswordComponent } from './new-password/new-password.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { EmailSentComponent } from 'src/app/components/auth/email-sent/email-sent.component';
import { ResetPasswordComponent } from './reset-password/reset-password.component';
import { SignUpEmailComponent } from 'src/app/components/auth/sign-up-email/sign-up-email.component';
import { AuthComponent } from './auth.component';

const routes: Routes = [
  {
    path: '',
    component: AuthComponent,
    children: [
      { path: '', component: LoginComponent },
      { path: 'sign-up', component: SignUpComponent },
      { path: 'new-password', component: NewPasswordComponent },
      { path: 'forgot-password', component: ForgotPasswordComponent},
      { path: 'email', component: SignUpEmailComponent},
      { path: 'reset-password', component: ResetPasswordComponent}
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AuthRoutingModule {}
