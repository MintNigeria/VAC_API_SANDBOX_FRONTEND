import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import {
  Container,
  EnterExitLeft,
  EnterFromTop,
} from 'src/app/animations/animations';
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
  constructor(    private router: Router,
    ) { }

  ngOnInit(): void {
    this.initLoginForm();
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
        Validators.minLength(6),
      ]),
      identifier: new FormControl(
        '',
        Validators.compose([Validators.required])
      ),
    });
  }
  loginAdmin(){
    this.router.navigateByUrl("/main")
  }
}
