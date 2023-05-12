import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Status } from 'src/app/types/shared.types';

@Component({
  selector: 'app-app-button',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './app-button.component.html',
  styleUrls: ['./app-button.component.scss']
})
export class AppButtonComponent implements OnInit {
  @Input() disabled!: boolean;
  @Input() buttonText!: string;
  @Input() buttonImage!: string;
  @Input() overRideButtonClass!: boolean;
  @Input() customClass!: string;
  @Input() buttonImage2!: string;
  @Input() status!: Status;
  @Output() buttonClick = new EventEmitter<boolean>();

  constructor() { }

  ngOnInit(): void {}
  
  get getCustomClass(): string {
    return this.overRideButtonClass ? this.customClass : '';
  }

  handleClick() {
    this.buttonClick.emit(true);
  }
}
