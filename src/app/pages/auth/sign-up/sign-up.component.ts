import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Status } from 'src/app/types/shared.types';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {
  signUp!: FormGroup
  status: Status = Status.NORMAL;

  constructor(private fb: FormBuilder, private router: Router) { }

  ngOnInit(): void {
    this.initSignUpForm()
  }
  get errorMessage() {
    return this.signUp.controls;
  }
  initSignUpForm(){
    this.signUp = this.fb.group({
      lastName: ['', Validators.required],
      firstName: ['', Validators.required],
      identifier: ['', Validators.required],
      phone: ['', [Validators.required, Validators.pattern('[0-9]{12}$')]]
    })
  }
  signUpButton(){this.router.navigateByUrl('/new-password')}
}
