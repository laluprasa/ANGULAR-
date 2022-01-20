import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UsersdetailsComponent } from './usersdetails/usersdetails.component';
import {HttpClientModule} from '@angular/common/http';//import this
import { FeatureModelModule } from './feature-model/feature-model.module';//import feature model
@NgModule({
  declarations: [
    AppComponent,
    UsersdetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,//add to imports
    FeatureModelModule//import feature module
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
