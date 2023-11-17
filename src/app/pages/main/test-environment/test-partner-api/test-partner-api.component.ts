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
import { callInstitutionConfigurationAPI, callInstitutionConfigurationAPISuccess, callInstitutionRecordAPI, callInstitutionRecordAPISuccess, decryptData, decryptDataSuccess, encryptData, encryptDataSuccess, getEncryptionAndDecryption, getEncryptionAndDecryptionSuccess } from 'src/app/store/institution/action';
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
      tabName: 'Test Encyrption ',
      apiUrl: 'https://1',
      slug: 'encrypt',
      editorOptions: {theme: 'vs-white', minimap: { enabled: false }, automaticLayout: true , language: 'typescript', readOnly: false}
    },
    {
      tabName: 'Test Decrytion',
      apiUrl: '',
      slug: 'decrypt',
      editorOptions: {theme: 'vs-white', minimap: { enabled: false }, automaticLayout: true , language: 'typescript', readOnly: true}
    },
    {
      tabName: 'Test Institution record API',
      apiUrl: 'https://2',
      slug: 'record'
    },
    {
      tabName: 'Test Institution Configuration API',
      apiUrl: 'https://2',
      slug: 'config',
      editorOptions: {theme: 'vs-white', minimap: { enabled: false }, automaticLayout: true , language: 'typescript', readOnly: true}
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

 

readOnly = false;
  activeTab: any;

  requestBtn: boolean = false;
  status: Status = Status.NORMAL;
  user: any;
  encryptionData: any;
  endpointPayload: any;
  code = ''
  institutionConfigData: any;
  encryptedData= '';
  showEncryptedData = false;
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
    if (this.activeTab.slug === 'encrypt')  {
      this.getEncyptionResponse()
    } else if (this.activeTab.slug === 'decrypt') {
      this.getEncyptionResponse()
    } else {
      this.institutionConfigResponse()

    }
  }
  getEncyptionResponse() {
    this.store.dispatch(
      getEncryptionAndDecryption({
        id: this.user.user?.institutionId,
      })
    );
    this.actions$.pipe(ofType(getEncryptionAndDecryptionSuccess)).subscribe((res: any) => {
      if (res.payload.payload !== null) {
        this.encryptionData = res.payload.payload
      }
    })
   
  }
  getDecyptionResponse() {
    this.store.dispatch(
      getEncryptionAndDecryption({
        id: this.user.user?.institutionId,
      })
    );
    this.actions$.pipe(ofType(getEncryptionAndDecryptionSuccess)).subscribe((res: any) => {
      if (res.payload.payload !== null) {
        this.encryptionData = res.payload.payload
      }
    })
   
  }
  institutionConfigResponse() {
    this.store.dispatch(
      callInstitutionConfigurationAPI({
        InstitutionId: this.user.user?.institutionId,
      })
    );
    this.actions$.pipe(ofType(callInstitutionConfigurationAPISuccess)).subscribe((res: any) => {
      if (res.payload !== null) {
        this.institutionConfigData = `${JSON.stringify(res.payload, null, '\t')}`;
      }
    })
   
  }



  codePayload(event: any) {
    this.endpointPayload = JSON.parse(event);
    
  }

  testEncryption() {
    const params = {

      ivKey: this.encryptionData.ivKey,
      secretKey: this.encryptionData.secretKey,
    }
    const payload = this.endpointPayload
    console.log(payload)
    
    this.store.dispatch(encryptData({params, payload}))
    this.actions$.pipe(ofType(encryptDataSuccess)).subscribe((res: any) => {
      console.log(res)
      this.encryptedData = res.payload;
      this.showEncryptedData = true;

    })
  }
  decryptEncryptedData() {
    const params = {

      ivKey: this.encryptionData.ivKey,
      secretKey: this.encryptionData.secretKey,
      data: this.encryptedData
    }
    const payload = {
     
    }
    this.store.dispatch(decryptData({params, payload}))
    this.actions$.pipe(ofType(decryptDataSuccess)).subscribe((res: any) => {
      this.code = `${JSON.stringify(res.payload, null, '\t')}`;

    })
  }

  testAPI() {
    const params = {

      InstitutionId: 24,
    }
    const payload = this.endpointPayload
    this.store.dispatch(callInstitutionRecordAPI({params, payload}))
    this.actions$.pipe(ofType(callInstitutionRecordAPISuccess)).subscribe((res: any) => {
      console.log(res)
      this.code = `${JSON.stringify(res.payload, null, '\t')}`;
      this.readOnly = true;
    })
  }
}
