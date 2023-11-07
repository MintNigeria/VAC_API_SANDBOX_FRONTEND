import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Status } from 'src/app/types/shared.types';

@Component({
  selector: 'app-api-configuratiosn',
  templateUrl: './api-configuratiosn.component.html',
  styleUrls: ['./api-configuratiosn.component.scss']
})
export class ApiConfiguratiosnComponent implements OnInit {
  encrypTionForm!: FormGroup
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
    }
  ];
  activeTab: string = 'encryption';
  status: Status = Status.NORMAL;

  constructor(private fb: FormBuilder, private matDialog: MatDialog) {}

  ngOnInit(): void {
    this.encrypTionForm = this.fb.group({
      ivKey: ['', Validators.required],
      secretKey: ['', Validators.required]
    })
  }

  selectTab(i: number) {
    this.activeTab = this.mockData[i].type;
  }

  partnerApi() {
    // this.requestBtn = true;
  }

}