import { Component, Inject, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { AppButtonComponent } from '../../components/app-button/app-button.component';

@Component({
  selector: 'app-confirm-success-modal',
  standalone: true,
  imports: [CommonModule, AppButtonComponent],
  templateUrl: './confirm-success-modal.component.html',
  styleUrls: ['./confirm-success-modal.component.scss'],
})
export class ConfirmSuccessModalComponent implements OnInit {
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    private route: Router,
    private matDialogRef: MatDialogRef<ConfirmSuccessModalComponent>
  ) {}

  ngOnInit(): void {}
  close() {
    this.matDialogRef.close(false);
  }

  confirm() {
    this.matDialogRef.close(true);
  }
}
