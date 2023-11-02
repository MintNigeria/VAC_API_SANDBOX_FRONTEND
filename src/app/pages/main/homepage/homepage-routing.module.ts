import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomepageComponent } from './homepage.component';
import { PartnerAPIComponent } from './partner-api/partner-api.component';
import { SystemAPIComponent } from './system-api/system-api.component';

const routes: Routes = [
  {
    path: '',
    component: HomepageComponent,
    children: [
      { path: '', component: SystemAPIComponent },
      { path: 'partner-api', component: PartnerAPIComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomepageRoutingModule {}
