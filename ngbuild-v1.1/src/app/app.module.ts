import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
//angular guide
import { ReactiveFormsModule } from '@angular/forms';
//angular guide
import { NameEditorComponent } from './name-editor/name-editor.component';
import { ProfileEditorComponent } from './profile-editor/profile-editor.component';
import { SamplecompComponent } from './samplecomp/samplecomp.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { SignupComponent } from './signup/signup.component';

@NgModule({
  declarations: [
    AppComponent,
    NameEditorComponent,
    ProfileEditorComponent,
    SamplecompComponent,
    PageNotFoundComponent,
    SignupComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,  ReactiveFormsModule //angular guide
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
