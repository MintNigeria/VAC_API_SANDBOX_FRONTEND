import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-sign-up-email',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './sign-up-email.component.html',
  styleUrls: ['./sign-up-email.component.scss']
})
export class SignUpEmailComponent implements OnInit {
  @Input() email!: string;

  constructor() { }

  ngOnInit(): void {
  }

}
