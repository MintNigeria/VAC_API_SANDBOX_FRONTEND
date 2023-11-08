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
  vacApiSetupForm! : FormGroup
  status: Status = Status.NORMAL;
  years: Array<any> = [];

  codeStructure: any;
  constructor(private fb: FormBuilder, private matDialog: MatDialog) { }
  
    ngOnInit(): void {
      this.initPartnerApi()
      let currentYear = new Date().getFullYear();
    for (let index = 1990; index <= currentYear; ++index) {
      this.years.push(index)
      // this.years.reverse()
    }
    this.vacApiSetupForm.valueChanges.subscribe((res: any) => {
      const data = `{
        institutionId: 0,
        facultyId: ${res.facultyId},
        departmentId: ${res.departmentId},
        degreeTypeId: ${res.degreeTypeId},
        yearOfGraduation: ${res.yearOfGraduation},
        addInstitutionGraduateVMs: [
          {
            "firstName": "string",
            "lastName": "string",
            "middleName": "string",
            "gender": "Unknown",
            "dateOfBirth": "2023-11-07T13:30:45.561Z",
            "address": "string",
            "stateOfOrigin": "string",
            "academicInformation": {
              "program": "string",
              "matriculationNumber": "string",
              "grade": "string",
              "yearOfEntry": "string"
            }
          }
        ],
  }`
  this.codeStructure = data

    })
    }
    initPartnerApi(){
      this.vacApiSetupForm = this.fb.group({
        institutionId: ['', Validators.required],
        facultyId: ['', Validators.required],
        departmentId: ['', Validators.required],
        degreeTypeId: ['', Validators.required],
        yearOfGraduation: ['', Validators.required],
      })
      // this.apiUrl = this.fb.group({
      //   partnerApiEndpoint: ''
      // })
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
