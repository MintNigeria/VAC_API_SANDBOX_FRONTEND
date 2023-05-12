import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
@Component({
  selector: 'app-app-sidebar',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './app-sidebar.component.html',
  styleUrls: ['./app-sidebar.component.scss'],
})
export class AppSidebarComponent implements OnInit {

  routes = [
    {
      img: 'assets/images/icons/dashboard-icon.svg',
      routeName: 'Dashboard',
      routePath: '/main/dashboard',
      activeImg: 'assets/images/icons/dashboard-active-icon.svg',
      exact: true,
      permission: false,
    },
    {
      img: 'assets/images/icons/fip-icon.svg',
      routeName: 'FIPs',
      routePath: '/main/fip',
      activeImg: 'assets/images/icons/fip-active-icon.svg',
      permission: false,
    },
  
  ];
  constructor(
    // private matDialog: MatDialog,
  ) {
  }

  ngOnInit(): void {}

  // logOut() {
  //   this.matDialog.open(LogoutModalComponent, {
  //     data: {
  //       image: 'assets/images/logout.svg',
  //       title: 'Log out?',
  //       content:
  //         'Are you sure you want to Log out directly from CDAL Aggregator Platform?',
  //       acceptText: 'Yes, Log out',
  //       cancelText: 'No, Cancel',
  //     },
  //     panelClass: 'custom-class',
  //   });
  // }
}
