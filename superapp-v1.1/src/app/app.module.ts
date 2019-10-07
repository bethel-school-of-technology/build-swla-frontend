
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { FormsModule }          from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { AppComponent }     from './app.component';
import { AppRoutingModule } from './app-routing.module';
// import { AppRoutingModule } from './app-routing.module';

import { CrisisListComponent } from './crisis-list/crisis-list.component';
import { HeroListComponent } from './hero-list/hero-list.component';
import { PageNotFoundComponent} from './page-not-found/page-not-found.component';
import {ProfileEditorComponent} from './profile-editor/profile-editor.component';


@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [
    AppComponent,
    HeroListComponent,
    // NameEditorComponent,
    ProfileEditorComponent,
    CrisisListComponent,
    PageNotFoundComponent
  ],
  // imports: [
  //   BrowserModule,
  //   AppRoutingModule,  ReactiveFormsModule
  // ],
  providers: [],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
