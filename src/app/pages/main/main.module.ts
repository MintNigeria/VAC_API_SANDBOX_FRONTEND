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
import { AppTextInputComponent } from 'src/app/shared/components/app-text-input/app-text-input.component';
import { AppButtonComponent } from 'src/app/shared/components/app-button/app-button.component';
import { AppSelectComponent } from 'src/app/shared/components/app-select/app-select.component';
import { SystemRequestParameterComponent } from './test-enviroment/system-request-parameter/system-request-parameter.component';
import { ResponseParameterComponent } from './test-enviroment/response-parameter/response-parameter.component';
import { ConfirmSuccessModalComponent } from 'src/app/shared/modals/confirm-success-modal/confirm-success-modal.component';
import { PartnerAPIComponent } from './homepage/partner-api/partner-api.component';
import { SystemAPIComponent } from './homepage/system-api/system-api.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EditorComponent } from 'src/app/shared/components/editor/editor.component';

@NgModule({
  declarations: [
    MainComponent,
    SupportComponent,
    TestEnviromentComponent,
    HomepageComponent,
    PartnerAPIComponent,
    SystemAPIComponent,
    TestPartnerAPIComponent,
    TestSystemAPIComponent,
    SystemRequestParameterComponent,
    ResponseParameterComponent,
  ],
  imports: [
    CommonModule,
    MainRoutingModule,
    AppHeaderComponent,
    AppSidebarComponent,
    ReactiveFormsModule,
    FormsModule,
    AppTextInputComponent,
    AppSelectComponent,
    AppButtonComponent,
    ConfirmSuccessModalComponent,
    EditorComponent,
  ],
})
export class MainModule {}
