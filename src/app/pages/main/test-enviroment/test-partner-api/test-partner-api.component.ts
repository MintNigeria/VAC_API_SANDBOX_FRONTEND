import { Component, Input, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Status } from 'src/app/types/shared.types';

@Component({
  selector: 'app-test-partner-api',
  templateUrl: './test-partner-api.component.html',
  styleUrls: ['./test-partner-api.component.scss'],
})
export class TestPartnerAPIComponent implements OnInit {
  @Input() testPartnerApi: FormControl = new FormControl();
  apiUrl!: FormGroup;
  status: Status = Status.NORMAL;
  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.initPartnerApi();
  }
  initPartnerApi() {
    this.apiUrl = this.fb.group({
      partnerApiEndpoint: ['', Validators.required],
    });
  }
  partnerApi() {}
}
