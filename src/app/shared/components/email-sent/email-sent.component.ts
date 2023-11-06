import { Component, Input, OnInit } from '@angular/core';
import { CommonModule, LocationStrategy } from '@angular/common';

@Component({
  selector: 'app-email-sent',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './email-sent.component.html',
  styleUrls: ['./email-sent.component.scss']
})
export class EmailSentComponent implements OnInit {
  @Input() email!: string;

  constructor(private location: LocationStrategy) { }

  ngOnInit(): void {
  }
  back() {
    this.location.back();
  }
}
