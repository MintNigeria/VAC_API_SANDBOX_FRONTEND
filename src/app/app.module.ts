import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SystemSampleApiComponent } from './components/main/homepage/system-sample-api/system-sample-api.component';
import { PartnerSampleApiComponent } from './components/main/homepage/partner-sample-api/partner-sample-api.component';

@NgModule({
  declarations: [
    AppComponent,
    SystemSampleApiComponent,
    PartnerSampleApiComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
