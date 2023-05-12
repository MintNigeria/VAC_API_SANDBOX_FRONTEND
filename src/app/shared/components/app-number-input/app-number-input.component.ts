import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormControl, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-app-number-input',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './app-number-input.component.html',
  styleUrls: ['./app-number-input.component.scss']
})
export class AppNumberInputComponent implements OnInit {
  @Input() control: FormControl = new FormControl();
  @Input() placeholder: string = '';
  @Input() required: boolean = false;
  @Input() readonly: boolean = false;
  @Input() class!: string;
  @Input() errorMessage: string = '';
  @Input() invalid!: any;
  @Input() value?: number;
  @Input() minlength: string | number | null = null;
  constructor() { }

  ngOnInit(): void {
  }

}
