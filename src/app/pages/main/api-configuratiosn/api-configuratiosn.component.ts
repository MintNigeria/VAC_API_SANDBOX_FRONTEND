import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Store, select } from '@ngrx/store';
import { InstitutionService } from 'src/app/core/services/institution/institution.service';
import { TestEnvironmentService } from 'src/app/core/services/test-environment/test-environment.service';
import { createEncryptionAndDecryption, createPartnerAPI, getEncryptionAndDecryption, updatePartnerAPI } from 'src/app/store/institution/action';
import { securitySelector } from 'src/app/store/security-setup/selector';
import { AppStateInterface } from 'src/app/types/appState.interface';
import { Status } from 'src/app/types/shared.types';

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
      tabName: 'Setup Encyrption & Decryption ',
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

  constructor(
    private fb: FormBuilder,
    private matDialog: MatDialog,
    private store: Store,
    private appStore: Store<AppStateInterface>,
    private service: InstitutionService
  ) {}

  ngOnInit(): void {
    this.encrypTionForm = this.fb.group({
      institutionId: '',
      institutionName: '',
      secretKey: ['', [Validators.minLength(16), Validators.maxLength(16)]],
      ivKey: ['', [Validators.minLength(16), Validators.maxLength(16)]],
    });

    this.integrateAPIForm = this.fb.group({
      id: '',
      configurationEndpoint: ['', [Validators.minLength(16), Validators.maxLength(16)]],
      queryEndpoint: ['', [Validators.minLength(16), Validators.maxLength(16)]],
    });

    const data: any = localStorage.getItem('authData');
    this.user = JSON.parse(data);

    this.store.dispatch(
      getEncryptionAndDecryption({
        id: this.user.user?.institutionId,
      })
    );
      this.store.dispatch(
        updatePartnerAPI({
          id: this.user.user?.institutionId,
        })
      )
  }
  get basicForm() {
    return this.encrypTionForm.controls;
  }

  selectTab(i: number) {
    this.activeTab = this.mockData[i].type;
  }

  partnerApi() {
    console.log(this.user.user?.institutionId)
    this.encrypTionForm.patchValue({
      institutionId: +this.user.user?.institutionId,
    })
    this.store.dispatch(createEncryptionAndDecryption({
      id: this.user.user?.institutionId,
      payload: this.encrypTionForm.value,
      
    }));
    // this.requestBtn = true;
  }
  endpointApi(){
    this.integrateAPIForm.patchValue({
      id: +this.userId
    })
    this.store.dispatch(createPartnerAPI({
      id: this.userId,
      payload: this.integrateAPIForm.value,   
    }));
  }
}
