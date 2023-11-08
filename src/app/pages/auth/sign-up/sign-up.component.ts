import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { Actions, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { createAccount, createAccountSuccess } from 'src/app/store/auth/action';
import { getAllInstitutionsDropdown, getAllInstitutionsDropdownSuccess } from 'src/app/store/institution/action';
import { AppStateInterface } from 'src/app/types/appState.interface';
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
  institutionList: any;

  constructor(
    private fb: FormBuilder, 
    private router: Router,
    private store: Store,
    private appStore: Store<AppStateInterface>,
    private actions$: Actions,) {}

  ngOnInit(): void {
    this.initSignUpForm();
    this.store.dispatch(getAllInstitutionsDropdown({payload : {institutionStatus:2}}))
    this.actions$.pipe(ofType(getAllInstitutionsDropdownSuccess)).subscribe((res: any) => {
      this.institutionList = res.payload;
      console.log(this.institutionList)
    })
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
      phoneNumber: ['', [Validators.required, Validators.pattern('[0-9]{12}$')]],
      email: ['', Validators.compose([Validators.pattern(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/), Validators.required])],
      password: ['', [Validators.required, Validators.minLength(8)]],
      institutionId: ['', Validators.required],
      institutionName: ['', Validators.required],
    });
  }
  signUpButton() {
    const {lastName, firstName, phoneNumber, email, password, institutionId, institutionName} = this.signUp.value
    const payload = {
      lastName,
      firstName,
      phoneNumber: String(phoneNumber),
      email,
      password,
      institutionId,
      institutionName
    }
    this.store.dispatch(createAccount({payload}));
    this.actions$.pipe(ofType(createAccountSuccess)).subscribe((res: any) => {
      console.log(res)
      if (res) {
        this.router.navigateByUrl('/new-password');

      }
    })
  }

  selectInstitutionName(event: any) {
    
    this.signUp.controls['institutionName'].setValue(event.institutionName)
    this.signUp.controls['institutionId'].setValue(event.id)
    console.log(this.signUp.value)
  }
}
