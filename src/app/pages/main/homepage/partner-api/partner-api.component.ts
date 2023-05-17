import { Component, Input, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-partner-api',
  templateUrl: './partner-api.component.html',
  styleUrls: ['./partner-api.component.scss']
})
export class PartnerAPIComponent implements OnInit {
@Input() partnerApi: FormControl = new FormControl
  constructor() { }

  ngOnInit(): void {
  }

}
