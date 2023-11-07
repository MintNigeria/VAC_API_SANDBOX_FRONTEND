import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ApiConfiguratiosnRoutingModule } from './api-configuratiosn-routing.module';
import { AppTextInputComponent } from 'src/app/shared/components/app-text-input/app-text-input.component';
import { securityReducer } from 'src/app/store/security-setup/reducer';
import { SecurityEffects } from 'src/app/store/security-setup/effects';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
        AppTextInputComponent,
    ApiConfiguratiosnRoutingModule,
    StoreModule.forFeature('security', securityReducer),
    EffectsModule.forFeature([SecurityEffects]),
  ]
})
export class ApiConfiguratiosnModule { }
