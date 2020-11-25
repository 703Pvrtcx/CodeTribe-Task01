import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  // {
  //   path: '',
  //   redirectTo: 'folder/Inbox',
  //   pathMatch: 'full'
  // }, 
  // {
  //   path: 'folder/:id',
  //   loadChildren: () => import('./folder/folder.module').then( m => m.FolderPageModule)
  // },
  // {
  //   path: '',
  //   redirectTo: 'folder',
  //   pathMatch: 'full'
  // },
  // {
  //   path: 'folder',
  //   loadChildren: () => import('./folder/folder.module').then( m => m.FolderPageModule)
  // },
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'registration',
    loadChildren: () => import('./pages/sign-in/registration/registration.module').then( m => m.RegistrationPageModule)
  },
  {
    path: 'verify-email',
    loadChildren: () => import('./pages/sign-in/verify-email/verify-email.module').then( m => m.VerifyEmailPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./pages/sign-in/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'dashboard',
    loadChildren: () => import('./pages/sign-in/dashboard/dashboard.module').then( m => m.DashboardPageModule)
  },
  {
    path: 'cart',
    loadChildren: () => import('./pages/cart/cart/cart.module').then( m => m.CartPageModule)
  },
  {
    path: 'home',
    loadChildren: () => import('./pages/cart/home/home.module').then( m => m.HomePageModule)
  },
  {
    path: 'cartlist',
    loadChildren: () => import('./pages/cart/cartlist/cartlist.module').then( m => m.CartlistPageModule)
  },
  {
    path: 'detail',
    loadChildren: () => import('./pages/cart/details/details.module').then( m => m.DetailsPageModule)
  },  {
    path: 'court-count',
    loadChildren: () => import('./pages/court-count/court-count.module').then( m => m.CourtCountPageModule)
  },
  {
    path: 'court-statistics',
    loadChildren: () => import('./pages/court-statistics/court-statistics.module').then( m => m.CourtStatisticsPageModule)
  },

];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
