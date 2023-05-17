import { Component, Input, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { AngularEditorConfig } from '@kolkov/angular-editor';

@Component({
  selector: 'app-system-request-parameter',
  templateUrl: './system-request-parameter.component.html',
  styleUrls: ['./system-request-parameter.component.scss']
})
export class SystemRequestParameterComponent implements OnInit {
@Input() requestParameter: FormControl = new FormControl()
  constructor() { }

  ngOnInit(): void {
  }
  

}
