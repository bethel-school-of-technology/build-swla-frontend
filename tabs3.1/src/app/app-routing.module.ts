import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)},
  // {
  //   path: '',
  //   redirectTo: 'home',
  //   pathMatch: 'full',
  //   // addition at 3:27
  //   // loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  // },
  {
    path: 'tabs',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  {
    path: 'tabs/tab1',
    loadChildren: () => import('./tab1/tab1.module').then(m => m.Tab1PageModule)
  },
  {
    path: 'tabs/tab2',
    loadChildren: () => import('./tab2/tab2.module').then(m => m.Tab2PageModule)
  },
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then(m => m.HomePageModule)

  }
  
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }


// {
  //   path: 'list',
  //   loadChildren: () => import('./list/list.module').then(m => m.ListPageModule)
  // }
  // {
  //   path: 'tabs/tabs',
  //   loadChildren: './tabs/tabs.module#TabsPageModule'
  //   // loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  // },

  // { path: 'home', loadChildren: './home/home.module#HomePageModule' },
  // {
  //   path: '',
  //   loadChildren: () => import('./home/home.module').then(m => m.HomePageModule)
  // }
