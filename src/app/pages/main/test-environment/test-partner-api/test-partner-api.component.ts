import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
} from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Actions, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { InstitutionService } from 'src/app/core/services/institution/institution.service';
import { ConfirmSuccessModalComponent } from 'src/app/shared/modals/confirm-success-modal/confirm-success-modal.component';
import { SuccessModalComponent } from 'src/app/shared/modals/success-modal/success-modal.component';
import { callInstitutionRecordAPI, callInstitutionRecordAPISuccess, encryptData, encryptDataSuccess, getEncryptionAndDecryption, getEncryptionAndDecryptionSuccess } from 'src/app/store/institution/action';
import { AppStateInterface } from 'src/app/types/appState.interface';
import { Status } from 'src/app/types/shared.types';

export interface CodeModel {
  language: string;
  value: string;
  uri: string;

  dependencies?: Array<string>;
  schemas?: Array<{
    uri: string;
    schema: Object;
  }>;
}
@Component({
  selector: 'app-test-partner-api',
  templateUrl: './test-partner-api.component.html',
  styleUrls: ['./test-partner-api.component.scss'],
})
export class TestPartnerAPIComponent implements OnInit {
  encrypTionForm!: FormGroup
  mockData = [
    {
      tabName: 'Setup Encyrption & Decryption ',
      apiUrl: 'https://1',
      slug: 'encrypt'
    },
    {
      tabName: 'Integrate with Partner API',
      apiUrl: 'https://2',
      slug: 'api'
    },
    // {
    //   tabName: 'Sample Test 3',
    //   apiUrl: 'https://3',
    // },
    // {
    //   tabName: 'Sample Test 4',
    //   apiUrl: 'https://4',
    // },
    // {
    //   tabName: 'Sample Test 5',
    //   apiUrl: 'https://5',
    // },
  ];

 

  editorOptions = {theme: 'vs-white', minimap: { enabled: false }, automaticLayout: true , language: 'javascript'};

  activeTab: any;

  requestBtn: boolean = false;
  status: Status = Status.NORMAL;
  user: any;
  encryptionData: any;
  endpointPayload: any;
  constructor(
    private fb: FormBuilder, 
    private matDialog: MatDialog,
    private store: Store,
    private actions$: Actions,
    private appStore: Store<AppStateInterface>,
    private service: InstitutionService
    ) {}

  ngOnInit(): void {
    this.activeTab = this.mockData[0]; //this should be set on api call not oninit
    const data: any = localStorage.getItem('authData');
    this.user = JSON.parse(data);
    this.getEncyptionResponse()
  }



  partnerApi() {
    this.requestBtn = true;
  }

  selectTab(i: number) {
    this.activeTab = this.mockData[i];
  }
  getEncyptionResponse() {
    this.store.dispatch(
      getEncryptionAndDecryption({
        id: this.user.user?.institutionId,
      })
    );
    this.actions$.pipe(ofType(getEncryptionAndDecryptionSuccess)).subscribe((res: any) => {
      console.log(res)
      if (res.payload.payload !== null) {
        this.encryptionData = res.payload.payload
      }
    })
   
  }

  requestUrl() {
    const openDialog = this.matDialog.open(ConfirmSuccessModalComponent, {
      data: {
        image: 'assets/images/question.png',
        title: 'Request Live URL to Migrate Data',
        content:
          'By requesting a live URL, you certify that you have successfully tested our sample API endpoints. Would you like to continue to make this request?',
        acceptText: 'Yes, Request Live URL',
        cancelText: 'Go back',
      },
    });
    openDialog.afterClosed().subscribe((result: boolean) => {
      if (result) {
        // Call a function when the "Accept" button is clicked
        this.confirmRequestUrl();
      } else {
        // Handle the "Cancel" action or do nothing
      }
    });
  }

  confirmRequestUrl() {
    // call endpoint here
    const openDialog = this.matDialog.open(SuccessModalComponent, {
      data: {
        image: 'assets/images/question.png',
        title: 'Success',
        content:
          'The requested live URL has been successfully sent to your registered email address.',
        okayText: 'Okay',
      },
    });
  }

  codePayload(event: any) {
    console.log(typeof(event))
    this.endpointPayload = JSON.parse(event);
  }

  testEncryption() {
    const params = {

      ivKey: this.encryptionData.ivKey,
      secretKey: this.encryptionData.secretKey,
    }
    const payload = {
      ...this.endpointPayload
    }
    this.store.dispatch(encryptData({params, payload}))
    this.actions$.pipe(ofType(encryptDataSuccess)).subscribe((res: any) => {
      console.log(res)
    })
  }
  testAPI() {
    const params = {

      InstitutionId: 24,
    }
    const payload = {
      ...this.endpointPayload
    }
    this.store.dispatch(callInstitutionRecordAPI({params, payload}))
    this.actions$.pipe(ofType(callInstitutionRecordAPISuccess)).subscribe((res: any) => {
      console.log(res)
    })
  }
}
