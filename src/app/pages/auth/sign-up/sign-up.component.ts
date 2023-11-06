import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { Status } from 'src/app/types/shared.types';
// import { IDropdownSettings, IDropdownSettings } from 'ng-multiselect-dropdown';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss'],
})
export class SignUpComponent implements OnInit {
  signUp!: FormGroup;
  status: Status = Status.NORMAL;
  dropdownList: any = [];
  selectedItems: any = [];
  dropdownSettings: any;

  selectedCar!: number;

  cars = [
    { id: 1, name: 'Volvo' },
    { id: 2, name: 'Saab' },
    { id: 3, name: 'Opel' },
    { id: 4, name: 'Audi' },
  ];

  constructor(private fb: FormBuilder, private router: Router) {}

  ngOnInit(): void {
    this.initSignUpForm();
  }
  onItemSelect(item: any) {
    console.log(item);
  }
  onSelectAll(items: any) {
    console.log(items);
  }
  get errorMessage() {
    return this.signUp.controls;
  }
  initSignUpForm() {
    this.signUp = this.fb.group({
      lastName: ['', Validators.required],
      firstName: ['', Validators.required],
      identifier: ['', Validators.required],
      phone: ['', [Validators.required, Validators.pattern('[0-9]{12}$')]],
      institution: '',
    });
  }
  signUpButton() {
    this.router.navigateByUrl('/new-password');
  }
}
