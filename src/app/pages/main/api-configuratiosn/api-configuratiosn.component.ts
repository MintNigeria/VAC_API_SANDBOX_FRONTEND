import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Actions, ofType } from '@ngrx/effects';
import { Store, select } from '@ngrx/store';
import { InstitutionService } from 'src/app/core/services/institution/institution.service';
import { TestEnvironmentService } from 'src/app/core/services/test-environment/test-environment.service';
import { createEncryptionAndDecryption, createEncryptionAndDecryptionSuccess, createPartnerAPI, createPartnerAPISuccess, getEncryptionAndDecryption, getEncryptionAndDecryptionSuccess, getPartnerAPI, getPartnerAPISuccess } from 'src/app/store/institution/action';
import { securitySelector } from 'src/app/store/security-setup/selector';
import { AppStateInterface } from 'src/app/types/appState.interface';
import { Status } from 'src/app/types/shared.types';
import { NotificationsService } from 'src/app/core/services/shared/notifications.service';

@Component({
  selector: 'app-api-configuratiosn',
  templateUrl: './api-configuratiosn.component.html',
  styleUrls: ['./api-configuratiosn.component.scss'],
})
export class ApiConfiguratiosnComponent implements OnInit {
  security$ = this.appStore.pipe(select(securitySelector));
  userId: any = '';

  encrypTionForm!: FormGroup;
  integrateAPIForm!: FormGroup;
  mockData = [
    {
      tabName: 'Setup Encryption & Decryption ',
      type: 'encryption',
      apiUrl: 'https://1',
    },
    {
      tabName: 'Integrate with Partner API',
      type: 'endpoint',
      apiUrl: 'https://2',
    },
  ];
  activeTab: string = 'encryption';
  status: Status = Status.NORMAL;
  user: any;
  btnText: string = 'Save Setup';

  constructor(
    private fb: FormBuilder,
    private matDialog: MatDialog,
    private store: Store,
    private actions$: Actions,
    private appStore: Store<AppStateInterface>,
    private service: InstitutionService,
    private notificationService: NotificationsService,

  ) {}

  ngOnInit(): void {
    const data: any = localStorage.getItem('authData');
    this.user = JSON.parse(data);
    this.encrypTionForm = this.fb.group({
      id: '',
      institutionId: '',
      institutionName: '',
      secretKey: ['', [Validators.minLength(16), Validators.maxLength(16)]],
      ivKey: ['', [Validators.minLength(16), Validators.maxLength(16)]],
    });

    this.integrateAPIForm = this.fb.group({
      id: '',
      configurationEndpoint: ['', Validators.required],
      recordQueryEndpoint: ['', Validators.required],
    });

    this.getEncyptionResponse()
   
      // this.store.dispatch(
      //   updatePartnerAPI({
      //     id: this.user.user?.institutionId,
      //   })
      // )
  }


  selectTab(i: number) {
    this.activeTab = this.mockData[i].type;
    if (i === 0) {
      this.getEncyptionResponse()
    } else {
      this.getConfigResponse()

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
        this.btnText = 'Update Setup'
        this.encrypTionForm.patchValue({
          ivKey: res.payload.payload?.ivKey,
          secretKey: res.payload.payload?.secretKey,
          id: res.payload.payload?.id
        })
      } else {
        this.btnText = 'Save Setup'

      }
    })
   
  }
  getConfigResponse() {
    this.store.dispatch(
      getPartnerAPI({
        id: this.user.user?.institutionId,
      })
    );
    this.actions$.pipe(ofType(getPartnerAPISuccess)).subscribe((res: any) => {
      if (res.payload.payload !== null) {
        this.btnText = 'Update Setup'
        this.integrateAPIForm.patchValue({
          configurationEndpoint: res.payload.payload.configurationEndpoint,
          recordQueryEndpoint: res.payload.payload.recordQueryEndpoint,
          id: res.payload.payload.id,
        })
      } else {
        this.btnText = 'Save Setup'

      }
    })
   
  }


  createEncryptionDecryptionData() {
    const {institutionId, institutionName, secretKey, ivKey, id } = this.encrypTionForm.value;
   
    if (this.btnText === 'Save Setup') {
      const payload = {
        // institutionId: Number(this.user.user?.institutionId),
        institutionName,
        secretKey,
        ivKey
      }
      this.store.dispatch(createEncryptionAndDecryption({
        id: this.user.user?.institutionId,
        payload
        
      }));
      this.actions$.pipe(ofType(createEncryptionAndDecryptionSuccess)).subscribe((res: any) => {
        if (res) {
          this.notificationService.publishMessages('success', res.payload.description);

          this.getEncyptionResponse()
        }
      })
    } else {
      const payload = {
        institutionId: Number(this.user.user?.institutionId),
        institutionName,
        secretKey,
        ivKey
      }
      this.store.dispatch(createEncryptionAndDecryption({
        id: this.user.user?.institutionId,
        payload: {...payload, id },
        
      }));
      this.actions$.pipe(ofType(createEncryptionAndDecryptionSuccess)).subscribe((res: any) => {
        if (res) {
          this.notificationService.publishMessages('success', res.payload.description);

          this.getEncyptionResponse()
        }
      })

    }
  }
  createPartnerApi() {
    const {configurationEndpoint, recordQueryEndpoint, id } = this.integrateAPIForm.value;

    const payload = {
      configurationEndpoint,
      recordQueryEndpoint
    }
    if (this.btnText === 'Save Setup') {

       this.store.dispatch(createPartnerAPI({
      id: this.user.user?.institutionId,
      payload,   
    }));
    this.actions$.pipe(ofType(createPartnerAPISuccess)).subscribe((res: any) => {
      if (res.payload.hasErrors === false) {
                  this.notificationService.publishMessages('success', res.payload.description);

        this.getConfigResponse()
      }
    })
  } else {
    this.store.dispatch(createPartnerAPI({
      id: this.user.user?.institutionId,
      payload: {...payload, id},   
    }));
    this.actions$.pipe(ofType(createPartnerAPISuccess)).subscribe((res: any) => {
      if (res.payload.hasErrors === false) {
        this.notificationService.publishMessages('success', res.payload.description);

      this.getConfigResponse()
      }
    })

    }
  }

  partnerApi() {
    console.log(this.user.user?.institutionId)
    this.encrypTionForm.patchValue({
      institutionId: this.user.user?.institutionId,
    })
    // this.requestBtn = true;
  }
  endpointApi(){
    this.integrateAPIForm.patchValue({
      id: +this.userId
    })
    // this.store.dispatch(createPartnerAPI({
    //   id: this.userId,
    //   payload: this.integrateAPIForm.value,   
    // }));
  }
}
