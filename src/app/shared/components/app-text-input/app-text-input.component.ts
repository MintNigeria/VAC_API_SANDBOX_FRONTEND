import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-app-text-input',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  templateUrl: './app-text-input.component.html',
  styleUrls: ['./app-text-input.component.scss']
})
export class AppTextInputComponent implements OnInit {
  @Input() control: FormControl = new FormControl();
  @Input() type: string = 'text';
  @Input() placeholder: string = '';
  @Input() required: boolean = false;
  @Input() readonly: boolean = false;
  @Input() class!: string;
  @Input() errorMessage: string = '';
  @Input() invalid!: any;
  @Input() pattern!: string;
  @Input() minlength: string | number | null = null;
  @Input() value?: string;

  constructor() { }

  ngOnInit(): void {
  }

  displayErrors() {
    const { dirty, touched, errors } = this.control;
    return dirty && touched && errors;
  }
}
