import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-app-password-input',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, FormsModule],
  templateUrl: './app-password-input.component.html',
  styleUrls: ['./app-password-input.component.scss']
})
export class AppPasswordInputComponent implements OnInit {
  @Input() type: string = 'password';
  @Input() placeholder: string = '';
  @Input() class!: string;
  @Input() required: boolean = false;
  @Input() control: FormControl = new FormControl();
  @Input() errorMessage: string = '';
  @Input() value: string = '';
  @Input() readonly: boolean = false
  constructor() { }

  ngOnInit(): void {
  }

  showPassword() {
    this.type === 'password' ? (this.type = 'text') : (this.type = 'password');
  }
}