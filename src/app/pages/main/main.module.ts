import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainRoutingModule } from './main-routing.module';
import { MainComponent } from './main.component';
import { AppHeaderComponent } from 'src/app/shared/components/app-header/app-header.component';
import { AppSidebarComponent } from 'src/app/shared/components/app-sidebar/app-sidebar.component';
import { SupportComponent } from './support/support.component';
import { TestEnviromentComponent } from './test-enviroment/test-enviroment/test-enviroment.component';
import { HomepageComponent } from './homepage/homepage/homepage.component';
import { TestPartnerAPIComponent } from './test-enviroment/test-partner-api/test-partner-api.component';
import { TestSystemAPIComponent } from './test-enviroment/test-system-api/test-system-api.component';
import { ReactiveFormsModule } from '@angular/forms';
import { AppTextInputComponent } from 'src/app/shared/components/app-text-input/app-text-input.component';
import { AppButtonComponent } from 'src/app/shared/components/app-button/app-button.component';
import { AppSelectComponent } from 'src/app/shared/components/app-select/app-select.component';


@NgModule({
  declarations: [
    MainComponent,
    SupportComponent,
    TestEnviromentComponent,
    HomepageComponent,
    TestPartnerAPIComponent,
    TestSystemAPIComponent,
  ],
  imports: [
    CommonModule,
    MainRoutingModule,
    AppHeaderComponent,
    AppSidebarComponent,
    ReactiveFormsModule,
    AppTextInputComponent,
    AppSelectComponent,
    AppButtonComponent
  ]
})
export class MainModule { }
