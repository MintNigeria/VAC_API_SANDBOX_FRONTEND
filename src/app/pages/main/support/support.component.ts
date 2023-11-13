import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { BytesCalculationService } from 'src/app/core/services/shared/byte.shared';
import { NotificationsService } from 'src/app/core/services/shared/notifications.service';
import { invokeSupport } from 'src/app/store/institution/action';
import { AppStateInterface } from 'src/app/types/appState.interface';
import { Status } from 'src/app/types/shared.types';

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
    { name: 'Type 1', value: '1' },
    { name: 'Type 2', value: '2' },
    { name: 'Type 3', value: '3' },
  ];
  constructor(
    private fb: FormBuilder,
    private notificationService: NotificationsService,
    private bytes: BytesCalculationService,
    private store: Store,
    private appStore: Store<AppStateInterface>,
  ) {}

  ngOnInit(): void {
    this.initSupportForm();
  }
  get errorMessage() {
    return this.support.controls;
  }
  initSupportForm() {
    this.support = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      message: ['', Validators.required],
    });
  }
  selectType(event: string) {
    // this.support.value.DemoProduct = event;
  }
  saveSupport() {
    if (this.support.valid) {
      const formData = new FormData();

      formData.append('email', this.support.value.email);
      formData.append('firstName', this.support.value.firstName);
      formData.append('lastName', this.support.value.lastName);
      formData.append('message', this.support.value.message)
      formData.append('file', this.uploadedFile)
      this.store.dispatch(invokeSupport({payload : formData}))
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
        this.support.patchValue({
          [value]: event.target.files[0],
        });
      }
    }
  }
}
