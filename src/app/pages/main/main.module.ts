import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainRoutingModule } from './main-routing.module';
import { MainComponent } from './main.component';
import { AppHeaderComponent } from 'src/app/shared/components/app-header/app-header.component';
import { AppSidebarComponent } from 'src/app/shared/components/app-sidebar/app-sidebar.component';
import { SupportComponent } from './support/support.component';
import { TestPartnerAPIComponent } from './test-environment/test-partner-api/test-partner-api.component';
import { TestSystemAPIComponent } from './test-environment/test-system-api/test-system-api.component';
import { AppTextInputComponent } from 'src/app/shared/components/app-text-input/app-text-input.component';
import { AppButtonComponent } from 'src/app/shared/components/app-button/app-button.component';
import { AppSelectComponent } from 'src/app/shared/components/app-select/app-select.component';
import { SystemRequestParameterComponent } from './test-environment/tabs/system-request-parameter/system-request-parameter.component';
import { ResponseParameterComponent } from './test-environment/tabs/response-parameter/response-parameter.component';
import { ConfirmSuccessModalComponent } from 'src/app/shared/modals/confirm-success-modal/confirm-success-modal.component';
import { PartnerAPIComponent } from './homepage/partner-api/partner-api.component';
import { SystemAPIComponent } from './homepage/system-api/system-api.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from 'src/app/shared/shared.module';
import { ApiConfiguratiosnComponent } from './api-configuratiosn/api-configuratiosn.component';

@NgModule({
  declarations: [MainComponent, SupportComponent, ApiConfiguratiosnComponent],
  imports: [
    CommonModule,
    SharedModule,
    MainRoutingModule,
    AppHeaderComponent,
    AppSidebarComponent,
    ReactiveFormsModule,
    FormsModule,
    AppTextInputComponent,
    AppSelectComponent,
    AppButtonComponent,
    ConfirmSuccessModalComponent,
  ],
})
export class MainModule {}
