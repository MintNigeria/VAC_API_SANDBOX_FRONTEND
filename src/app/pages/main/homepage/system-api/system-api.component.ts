import { Component, Input, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-system-api',
  templateUrl: './system-api.component.html',
  styleUrls: ['./system-api.component.scss']
})
export class SystemAPIComponent implements OnInit {
@Input() systemApi: FormControl = new FormControl
  constructor() { }

  ngOnInit(): void {
  }

}
