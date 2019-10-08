import { NgModule }              from '@angular/core';
import { RouterModule, Routes }  from '@angular/router';

import { SignupComponent }   from './signup/signup.component';
import { CommunityComponent }     from './community/community.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import {MapComponent } from './map/map.component';

const appRoutes: Routes = [
  { path: 'signup', component: SignupComponent },
  { path: 'community',        component: CommunityComponent },
  {path: 'map', component: MapComponent},
  { path: '',   redirectTo: '/signup', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true }
    )
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {}
