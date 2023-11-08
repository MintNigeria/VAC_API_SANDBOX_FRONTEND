import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ApiConfiguratiosnRoutingModule } from './api-configuratiosn-routing.module';
import { AppTextInputComponent } from 'src/app/shared/components/app-text-input/app-text-input.component';
import { SecurityEffects } from 'src/app/store/security-setup/effects';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { securityReducers } from 'src/app/store/security-setup/reducers';
import { InstitutionEffects } from 'src/app/store/institution/effects';
import { institutionReducers } from 'src/app/store/institution/reducers';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    AppTextInputComponent,
    StoreModule.forFeature('institution', institutionReducers),
    EffectsModule.forFeature([InstitutionEffects]),
    ApiConfiguratiosnRoutingModule,
  ],
})
export class ApiConfiguratiosnModule {}
