import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Store, select } from '@ngrx/store';
import { TestEnvironmentService } from 'src/app/core/services/test-environment/test-environment.service';
import { createEncryptionAndDecryption, setupEncryptionAndDecryption } from 'src/app/store/security-setup/action';
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
  id: string = '';

  encrypTionForm!: FormGroup;
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

  constructor(
    private fb: FormBuilder,
    private matDialog: MatDialog,
    private store: Store,
    private appStore: Store<AppStateInterface>,
  ) {}

  ngOnInit(): void {

    this.encrypTionForm = this.fb.group({
      ivKey: ['', Validators.required],
      secretKey: ['', Validators.required],
    });
    this.store.dispatch(setupEncryptionAndDecryption({
      id: this.id
    }));

  }

  selectTab(i: number) {
    this.activeTab = this.mockData[i].type;
  }

  partnerApi() {
    this.store.dispatch(createEncryptionAndDecryption({
      payload: this.encrypTionForm.value,
      id: this.id
    }));
    this.security$.subscribe((res) => console.log(res))

    // this.requestBtn = true;
  }
}
