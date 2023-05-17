import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  Router,
  RouterModule,
  Event as NavigationEvent,
  NavigationStart,
} from '@angular/router';
@Component({
  selector: 'app-app-sidebar',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './app-sidebar.component.html',
  styleUrls: ['./app-sidebar.component.scss'],
})
export class AppSidebarComponent implements OnInit {
  @Input() routes: { routePath: string; routeName: string , exact?: boolean}[] = [];
  constructor(
    // private matDialog: MatDialog,
    private router: Router
  ) {}

  ngOnInit(): void {
    // this.event$ = this.router.events.subscribe(
    //   (event: NavigationEvent)=> {
    //     if(event instanceof NavigationStart){
    //       console.log(event.url)
    //     }
    //   }
    // )
  }

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
