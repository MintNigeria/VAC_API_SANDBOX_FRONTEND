import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ApiConfiguratiosnComponent } from './api-configuratiosn.component';

const routes: Routes = [
  {
    path: '', component: ApiConfiguratiosnComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ApiConfiguratiosnRoutingModule { }
