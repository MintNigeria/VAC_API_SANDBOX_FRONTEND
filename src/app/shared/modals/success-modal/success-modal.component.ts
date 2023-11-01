import { CommonModule } from '@angular/common';
import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { AppButtonComponent } from '../../components/app-button/app-button.component';

@Component({
  selector: 'app-success-modal',
  standalone: true,
  imports: [CommonModule, AppButtonComponent],
  templateUrl: './success-modal.component.html',
  styleUrls: ['./success-modal.component.scss'],
})
export class SuccessModalComponent implements OnInit {
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    private route: Router,
    private matDialogRef: MatDialogRef<SuccessModalComponent>
  ) {}

  ngOnInit(): void {}

  confirm() {
    this.matDialogRef.close(true);
  }
}
