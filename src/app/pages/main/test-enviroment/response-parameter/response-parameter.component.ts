import { Component, Input, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-response-parameter',
  templateUrl: './response-parameter.component.html',
  styleUrls: ['./response-parameter.component.scss']
})
export class ResponseParameterComponent implements OnInit {
@Input() responseParameter: FormControl = new FormControl
  constructor() { }

  ngOnInit(): void {
  }

}
