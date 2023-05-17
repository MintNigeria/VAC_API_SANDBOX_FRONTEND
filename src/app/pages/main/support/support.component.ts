import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Status } from 'src/app/types/shared.types';

@Component({
  selector: 'app-support',
  templateUrl: './support.component.html',
  styleUrls: ['./support.component.scss']
})
export class SupportComponent implements OnInit {
support! : FormGroup
status: Status = Status.NORMAL;

selectedIssueType = [
  { name: 'Type 1', value: '1' },
  { name: 'Type 2', value: '2' },
  { name: 'Type 3', value: '3' },
];
  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.initSupportForm()
  }
  get errorMessage() {
    return this.support.controls;
  }
  initSupportForm(){
    this.support = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      message: ['', Validators.required]
    })
  }
  selectType(event: string) {
    // this.support.value.DemoProduct = event;
  }
  saveSupport(){}
}
