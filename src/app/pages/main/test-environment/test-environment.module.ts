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
import { EditorComponent } from 'src/app/shared/components/editor/editor.component';
import { ConfirmSuccessModalComponent } from 'src/app/shared/modals/confirm-success-modal/confirm-success-modal.component';

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
    ReactiveFormsModule,
    FormsModule,
    ConfirmSuccessModalComponent,
    EditorComponent,
  ],
})
export class TestEnvironmentModule {}
