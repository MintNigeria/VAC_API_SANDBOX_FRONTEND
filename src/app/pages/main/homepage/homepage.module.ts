import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomepageRoutingModule } from './homepage-routing.module';
import { HomepageComponent } from './homepage.component';
import { AppSidebarComponent } from 'src/app/shared/components/app-sidebar/app-sidebar.component';
import { PartnerAPIComponent } from './partner-api/partner-api.component';
import { SystemAPIComponent } from './system-api/system-api.component';
import { AppButtonComponent } from 'src/app/shared/components/app-button/app-button.component';
import { EditorComponent } from 'src/app/shared/components/editor/editor.component';

@NgModule({
  declarations: [HomepageComponent, PartnerAPIComponent, SystemAPIComponent],
  imports: [
    CommonModule,
    HomepageRoutingModule,
    AppSidebarComponent,
    AppButtonComponent,
    EditorComponent,
  ],
})
export class HomepageModule {}
