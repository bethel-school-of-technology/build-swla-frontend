import { NgModule }       from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { FormsModule }    from '@angular/forms';

import { AppComponent }     from './app.component';
import { AppRoutingModule } from './app-routing.module';

import { SignupComponent }   from './signup/signup.component';
import { CommunityComponent }     from './community/community.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
//forms
import { ReactiveFormsModule } from '@angular/forms';
import { SignupformComponent } from './signupform/signupform.component';
import { MapComponent } from './map/map.component';

//added import RFM.
@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule, ReactiveFormsModule
  ],
  declarations: [
    AppComponent,
    CommunityComponent,
    SignupComponent,
    PageNotFoundComponent,
    SignupformComponent,
    MapComponent
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }