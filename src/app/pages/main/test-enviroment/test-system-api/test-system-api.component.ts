import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Status } from 'src/app/types/shared.types';

@Component({
  selector: 'app-test-system-api',
  templateUrl: './test-system-api.component.html',
  styleUrls: ['./test-system-api.component.scss']
})
export class TestSystemAPIComponent implements OnInit {
  apiUrl! : FormGroup
  status: Status = Status.NORMAL;
  constructor(private fb: FormBuilder) { }
  
    ngOnInit(): void {
      this.initPartnerApi()
    }
    initPartnerApi(){
      this.apiUrl = this.fb.group({
        partnerApiEndpoint: ['', Validators.required]
      })
    }
    partnerApi(){}OnInit(): void {
  }

}
