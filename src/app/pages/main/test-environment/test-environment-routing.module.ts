import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TestEnvironmentComponent } from './test-environment.component';
import { ResponseParameterComponent } from './tabs/response-parameter/response-parameter.component';
import { SystemRequestParameterComponent } from './tabs/system-request-parameter/system-request-parameter.component';
import { TestPartnerAPIComponent } from './test-partner-api/test-partner-api.component';
import { TestSystemAPIComponent } from './test-system-api/test-system-api.component';

const routes: Routes = [
  {
    path: '',
    component: TestEnvironmentComponent,
    children: [
      { path: '', pathMatch: 'full', redirectTo: 'test-system-API' },
      {
        path: 'test-system-API',
        component: TestSystemAPIComponent,
        children: [
          {
            path: '',
            redirectTo: 'system-request-parameter',
            pathMatch: 'full',
          },
          {
            path: 'system-request-parameter',
            component: SystemRequestParameterComponent,
          },
          {
            path: 'response-parameter',
            component: ResponseParameterComponent,
          },
        ],
      },
      { path: 'test-partner-API', component: TestPartnerAPIComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TestEnvironmentRoutingModule {}
