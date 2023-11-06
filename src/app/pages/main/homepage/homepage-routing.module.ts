import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomepageComponent } from './homepage.component';
import { PartnerAPIComponent } from './partner-api/partner-api.component';
import { SystemAPIComponent } from './system-api/system-api.component';
import { SystemRequestParameterComponent } from './tabs/system-request-parameter/system-request-parameter.component';
import { ResponseParameterComponent } from './tabs/response-parameter/response-parameter.component';

const routes: Routes = [
  {
    path: '',
    component: HomepageComponent,
    children: [
      { path: '', pathMatch: 'full', redirectTo: 'system-api' },
      {
        path: 'system-api',
        component: SystemAPIComponent,
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
      { path: 'partner-api', component: PartnerAPIComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomepageRoutingModule {}
