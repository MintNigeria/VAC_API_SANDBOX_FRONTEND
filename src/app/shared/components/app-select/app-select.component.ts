import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-app-select',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './app-select.component.html',
  styleUrls: ['./app-select.component.scss']
})
export class AppSelectComponent implements OnInit {
  show: boolean = false;
  @Input() defaultText: string = 'Select';
  @Input() readonlyBtn = false;
  @Input() title: string = 'Select text';
  @Input() options: any[] = [];
  @Output() selectedValue = new EventEmitter<string>();

  constructor() {}

  ngOnInit(): void {
    window.addEventListener('click', (event) => {
      if ((event.target as HTMLInputElement).tagName != 'SPAN') {
        this.show = false;
      }
    });
  }
  selectValue(name: string,value: string) {
    this.show = false;
    this.defaultText = name;
    this.selectedValue.emit(value);
  }
}

