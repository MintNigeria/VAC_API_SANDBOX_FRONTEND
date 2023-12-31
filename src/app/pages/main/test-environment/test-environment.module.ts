import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TestEnvironmentRoutingModule } from './test-environment-routing.module';
import { TestEnvironmentComponent } from './test-environment.component';
import { TestPartnerAPIComponent } from './test-partner-api/test-partner-api.component';
import { TestSystemAPIComponent } from './test-system-api/test-system-api.component';
import { AppSidebarComponent } from 'src/app/shared/components/app-sidebar/app-sidebar.component';
import { AppButtonComponent } from 'src/app/shared/components/app-button/app-button.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ResponseParameterComponent } from './tabs/response-parameter/response-parameter.component';
import { SystemRequestParameterComponent } from './tabs/system-request-parameter/system-request-parameter.component';
import { ConfirmSuccessModalComponent } from 'src/app/shared/modals/confirm-success-modal/confirm-success-modal.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { AppTextInputComponent } from 'src/app/shared/components/app-text-input/app-text-input.component';
import { NgSelectModule } from '@ng-select/ng-select';

@NgModule({
  declarations: [
    TestEnvironmentComponent,
    TestPartnerAPIComponent,
    TestSystemAPIComponent,
    SystemRequestParameterComponent,
    ResponseParameterComponent,
  ],
  imports: [
    CommonModule,
    TestEnvironmentRoutingModule,
    AppSidebarComponent,
    AppButtonComponent,
    AppTextInputComponent,
    ReactiveFormsModule,
    FormsModule,
    ConfirmSuccessModalComponent,
    SharedModule,
    NgSelectModule,
  ],
})
export class TestEnvironmentModule {}
