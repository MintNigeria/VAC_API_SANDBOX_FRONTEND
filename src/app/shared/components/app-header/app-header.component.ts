import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { ConfirmSuccessModalComponent } from '../../modals/confirm-success-modal/confirm-success-modal.component';

@Component({
  selector: 'app-app-header',
  standalone: true,
  imports: [CommonModule, RouterModule, MatDialogModule],
  templateUrl: './app-header.component.html',
  styleUrls: ['./app-header.component.scss']
})
export class AppHeaderComponent implements OnInit {
  showAccount : boolean = false
  user: any;
  constructor(
    private matDialog: MatDialog,
    private router: Router
  ) { }

  ngOnInit(): void {
    const data: any = localStorage.getItem('authData');
    this.user = JSON.parse(data);
  }
  logOut(){
    this.matDialog.open(ConfirmSuccessModalComponent, {
      data : {
        image: 'assets/images/log-logo.png',
        title: 'Are you sure you want to log out from VAC Sandbox?',
        content: 'Are you sure you want to log out from VAC Sandbox?',
        acceptText: 'Log out',
        cancelText: 'No, Cancel'
      },
      panelClass: 'custom-class',

    }).afterClosed().subscribe((res: any) => {
      console.log(res)
      if (res === true) {
        this.router.navigateByUrl('/')
      }
    })
  }
}
