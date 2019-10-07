import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {SamplecompComponent} from './samplecomp/samplecomp.component';
import {PageNotFoundComponent} from './page-not-found/page-not-found.component';
import {SignupComponent} from './signup/signup.component';
const appRoutes: Routes = [

  { path: 'samplecomp', component: SamplecompComponent },
  {path: 'signup', component: SignupComponent},
  // { path: 'heroes',        component: HeroListComponent },
  // { path: '',   redirectTo: '/heroes', pathMatch: 'full' },
  { path: '',   redirectTo: '/index', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes, { enableTracing: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
