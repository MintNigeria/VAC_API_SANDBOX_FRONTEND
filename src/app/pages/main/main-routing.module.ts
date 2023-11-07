import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './main.component';
import { SupportComponent } from './support/support.component';
import { TestSystemAPIComponent } from './test-environment/test-system-api/test-system-api.component';
import { TestPartnerAPIComponent } from './test-environment/test-partner-api/test-partner-api.component';
import { SystemRequestParameterComponent } from './test-environment/tabs/system-request-parameter/system-request-parameter.component';
import { ResponseParameterComponent } from './test-environment/tabs/response-parameter/response-parameter.component';
import { ApiConfiguratiosnComponent } from './api-configuratiosn/api-configuratiosn.component';

const routes: Routes = [
  {
    path: '',
    component: MainComponent,
    children: [
      {
        path: '',
        loadChildren: () =>
          import('./homepage/homepage.module').then((m) => m.HomepageModule),
      },
      {
        path: 'test-environment',
        loadChildren: () =>
          import('./test-environment/test-environment.module').then(
            (m) => m.TestEnvironmentModule
          ),
      },
      { path: 'support', component: SupportComponent },
      { path: 'api-configuration', component: ApiConfiguratiosnComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MainRoutingModule {}
