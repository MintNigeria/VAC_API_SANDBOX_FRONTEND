import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ApiConfiguratiosnRoutingModule } from './api-configuratiosn-routing.module';
import { AppTextInputComponent } from 'src/app/shared/components/app-text-input/app-text-input.component';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
        AppTextInputComponent,
    ApiConfiguratiosnRoutingModule
  ]
})
export class ApiConfiguratiosnModule { }
