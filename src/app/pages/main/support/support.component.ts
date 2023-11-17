import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { BytesCalculationService } from 'src/app/core/services/shared/byte.shared';
import { invokeSupport, invokeSupportSuccess } from 'src/app/store/institution/action';
import { AppStateInterface } from 'src/app/types/appState.interface';
import { Status } from 'src/app/types/shared.types';
import { Actions, ofType } from '@ngrx/effects';
import { NotificationsService } from 'src/app/core/services/shared/notifications.service';

@Component({
  selector: 'app-support',
  templateUrl: './support.component.html',
  styleUrls: ['./support.component.scss'],
})
export class SupportComponent implements OnInit {
  support!: FormGroup;
  status: Status = Status.NORMAL; 
  uploadedFile : any = null
  selectedIssueType = [
    { name: 'Encryption / Decryption', value: 'Encryption / Decryption' },
    { name: 'Record Query Enpoint', value: 'Record Query Enpoint' },
    { name: 'Others', value: 'Other' },
  ];
  user: any;
  constructor(
    private fb: FormBuilder,
    private notificationService: NotificationsService,
    private bytes: BytesCalculationService,
    private actions$: Actions,
    private store: Store,
    private appStore: Store<AppStateInterface>,

  ) {}

  ngOnInit(): void {
    const data: any = localStorage.getItem('authData');
    this.user = JSON.parse(data);
    this.initSupportForm();
    

  }
  get errorMessage() {
    return this.support.controls;
  }
  initSupportForm() {
    this.support = this.fb.group({
      email: [this.user.user.email, [Validators.required, Validators.email]],
      firstName: [this.user.user.firstName, Validators.required],
      lastName: [this.user.user.lastName],
      message: ['', Validators.required],
      issueType: ['', Validators.required],
    });
  }
  selectType(event: string) {
    console.log(event)
    this.support.controls['issueType'].setValue(event);
  }
  saveSupport() {
    console.log('dsdsd', this.support)
    if (this.support.valid) {
      const formData = new FormData();

      formData.append('email', this.support.value.email);
      formData.append('firstName', this.support.value.firstName);
      formData.append('lastName', this.support.value.lastName || 'user');
      formData.append('message', this.support.value.message)
      formData.append('issueType', this.support.value.issueType)
      formData.append('SupportingDocument', this.uploadedFile)
      this.store.dispatch(invokeSupport({payload : formData}))
      this.actions$.pipe(ofType(invokeSupportSuccess)).subscribe((res: any) => {
        console.log(res)
        this.notificationService.publishMessages(
          'success',
          res.payload
        );
      })
    }
  }

  getFile(event: any, value: string) {
    if (event.target.files.length) {
      const file = event.target.files[0];
      this.uploadedFile = file
      const size = this.bytes.bytes_to_size(event.target.files[0].size);

      if (size.includes('GB')) {
        this.notificationService.publishMessages(
          'error',
          'file should be less than 1GB'
        );
      } else {
        // this.support.patchValue({
        //   [value]: event.target.files[0],
        // });
      }
    }
  }
}
