import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './main.component';
import { SupportComponent } from './support/support.component';
import { TestEnviromentComponent } from './test-enviroment/test-enviroment/test-enviroment.component';
import { HomepageComponent } from './homepage/homepage/homepage.component';
import { SystemAPIComponent } from './homepage/system-api/system-api.component';
import { PartnerAPIComponent } from './homepage/partner-api/partner-api.component';
import { TestSystemAPIComponent } from './test-enviroment/test-system-api/test-system-api.component';
import { TestPartnerAPIComponent } from './test-enviroment/test-partner-api/test-partner-api.component';
import { SystemRequestParameterComponent } from './test-enviroment/system-request-parameter/system-request-parameter.component';
import { ResponseParameterComponent } from './test-enviroment/response-parameter/response-parameter.component';

const routes: Routes = [
  {
    path: '',
    component: MainComponent,
    children: [
      {
        path: '',
        component: HomepageComponent,
        children: [
          { path: '', component: SystemAPIComponent },
          { path: 'partner-API', component: PartnerAPIComponent },
        ],
      },
      {
        path: 'test-enviroment',
        component: TestEnviromentComponent,
        children: [
          { path: '', pathMatch: 'full', redirectTo: 'test-system-API' },
          {
            path: 'test-system-API',
            component: TestSystemAPIComponent,
            children: [
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
      { path: 'support', component: SupportComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MainRoutingModule {}
