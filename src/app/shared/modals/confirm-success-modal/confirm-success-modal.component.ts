import { Component, Inject, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { AppButtonComponent } from '../../components/app-button/app-button.component';
import { Store } from '@ngrx/store';
import { AuthService } from 'src/app/core/services/auth/auth.service';
import { NotificationsService } from 'src/app/core/services/shared/notifications.service';
import { StorageService } from 'src/app/core/services/shared/storage.service';
import { logoutAction } from 'src/app/store/auth/action';

@Component({
  selector: 'app-confirm-success-modal',
  standalone: true,
  imports: [CommonModule, AppButtonComponent],
  templateUrl: './confirm-success-modal.component.html',
  styleUrls: ['./confirm-success-modal.component.scss'],
})
export class ConfirmSuccessModalComponent implements OnInit {
  user: any;
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    private route: Router,
    private matDialogRef: MatDialogRef<ConfirmSuccessModalComponent>,
    private localStorage: StorageService,
    private router: Router,
    private notificationService: NotificationsService,
    private authService: AuthService,
    private store: Store,
  ) {}

  ngOnInit(): void {
    const data: any = localStorage.getItem('auth')
    this.user = JSON.parse(data)
  }
  close() {
    this.matDialogRef.close(false);
  }

  confirm() {

    const payload = {
      emailAddress : this.user.user.email
    }
      this.authService.logOut(payload).subscribe((res: any) => {
        if (res) {
          this.notificationService.publishMessages('success', 'User logged out successfully')
          this.router.navigateByUrl('/')
          this.store.dispatch(logoutAction());
          localStorage.clear()
          localStorage.removeItem('auth');
          this.matDialogRef.close(true);
        }
       
      })
  }

}
  
