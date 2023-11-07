import { Component, Input, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { ConfirmSuccessModalComponent } from 'src/app/shared/modals/confirm-success-modal/confirm-success-modal.component';
import { SuccessModalComponent } from 'src/app/shared/modals/success-modal/success-modal.component';
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
    },
    {
      tabName: 'Integrate with Partner API',
      apiUrl: 'https://2',
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

  exampleResponse = {
    error: false,
    message: '3 Categor(ies) Available',
    data: [
      {
        id: 1,
        created_by: 1,
        name: 'Electronics',
        slug: 'electronics',
        short_description: null,
        file_path: null,
        is_active: 1,
        status: 'Active',
        created_at: '2023-08-20T10:36:34.000000Z',
        updated_at: '2023-08-20T10:36:34.000000Z',
      },
      {
        id: 2,
        created_by: 1,
        name: 'Food',
        slug: 'food',
        short_description: null,
        file_path: null,
        is_active: 1,
        status: 'Active',
        created_at: '2023-08-20T10:37:04.000000Z',
        updated_at: '2023-08-20T10:37:04.000000Z',
      },
      {
        id: 3,
        created_by: 1,
        name: 'Foooddd',
        slug: 'foooddd',
        short_description: null,
        file_path: 'http://localhost:2020/category/category_food1.png',
        is_active: 0,
        status: 'Inactive',
        created_at: '2023-08-20T10:39:41.000000Z',
        updated_at: '2023-08-20T10:59:27.000000Z',
      },
    ],
  };

  activeTab: any;

  requestBtn: boolean = false;
  status: Status = Status.NORMAL;
  constructor(private fb: FormBuilder, private matDialog: MatDialog) {}

  ngOnInit(): void {
    this.activeTab = this.mockData[0]; //this should be set on api call not oninit
    this.encrypTionForm = this.fb.group({
      ivKey: ['', Validators.required],
      secretKey: ['', Validators.required]
    })
  }

  partnerApi() {
    this.requestBtn = true;
  }

  selectTab(i: number) {
    this.activeTab = this.mockData[i];
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
}
