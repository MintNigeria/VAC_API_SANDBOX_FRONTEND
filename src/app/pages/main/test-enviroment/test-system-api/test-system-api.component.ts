import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { ConfirmSuccessModalComponent } from 'src/app/shared/modals/confirm-success-modal/confirm-success-modal.component';
import { Status } from 'src/app/types/shared.types';

@Component({
  selector: 'app-test-system-api',
  templateUrl: './test-system-api.component.html',
  styleUrls: ['./test-system-api.component.scss']
})
export class TestSystemAPIComponent implements OnInit {
  apiUrl! : FormGroup
  status: Status = Status.NORMAL;
  constructor(private fb: FormBuilder, private matDialog: MatDialog) { }
  
    ngOnInit(): void {
      this.initPartnerApi()
    }
    initPartnerApi(){
      this.apiUrl = this.fb.group({
        partnerApiEndpoint: ''
      })
    }
    partnerApi() {}
    requestUrl(){
     const openDialog = this.matDialog.open(ConfirmSuccessModalComponent, {
        data : {
          image: 'assets/images/question.png',
          title: 'Request Live URL to Migrate Data',
          content: 'By requesting a live URL, you certify that you have successfully tested our sample API endpoints. Would you like to continue to make this request?',
          acceptText: 'Yes, Request Live URL',
          cancelText: 'Go back'
        }
      })
    }

}
