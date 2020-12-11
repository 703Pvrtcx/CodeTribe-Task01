import { TabsPage } from './page/menu/tabs/tabs.page';
import { SidemenuPage } from './page/menu/sidemenu/sidemenu.page';
import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  
  {
    path: '',
    redirectTo: 'sidemenu/tabs/home',
    pathMatch: 'full'
  },
  {
    path: 'sidemenu', component: SidemenuPage, children: [
      {
        path: 'tabs',
        component: TabsPage,
        children: [
          {
            path: 'home',
            loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
          },
          {
            path: '',
            redirectTo: 'home',
            pathMatch: 'full'
          },
          {
            path: 'profile',
            loadChildren: () => import('./page/profile/profile.module').then( m => m.ProfilePageModule)
          },
          {
            path: 'profile-tab',
            loadChildren: () => import('./page/profile-tab/profile-tab.module').then( m => m.ProfileTabPageModule)
          },
          {
            path: 'contact',
            loadChildren: () => import('./page/contact/contact.module').then( m => m.ContactPageModule)
          },
          {
            path: 'leaflet',
            loadChildren: () => import('./page/Map-Location/leaflet/leaflet.module').then( m => m.LeafletPageModule)
          },
          {
            path: 'maps',
            loadChildren: () => import('./page/Map-Location/maps/maps.module').then( m => m.MapsPageModule)
          },
          {
            path: 'cartview',
            loadChildren: () => import('./page/cartview/cartview.module').then( m => m.CartviewPageModule)
          },
          {
            path: 'payments',
            loadChildren: () => import('./page/payments/payments.module').then( m => m.PaymentsPageModule)
          },
          {
            path: 'login',
            loadChildren: () => import('./page/sign-in/login/login-routing.module').then( m => m.LoginPageRoutingModule)
          },
          {
            path: 'logout',
            loadChildren: () => import('./page/sign-in/login/login-routing.module').then( m => m.LoginPageRoutingModule)
          },
        ]
      },
    ]
  },
  {
    path: 'login',
    loadChildren: () => import('./page/sign-in/login/login-routing.module').then( m => m.LoginPageRoutingModule)
  },
  {
    path: 'logout',
    loadChildren: () => import('./page/sign-in/login/login-routing.module').then( m => m.LoginPageRoutingModule)
  },
  {
    path: 'registration',
    loadChildren: () => import('./page/sign-in/registration/registration.module').then( m => m.RegistrationPageModule)
  },
  {
    path: 'cartview',
    loadChildren: () => import('./page/cartview/cartview.module').then( m => m.CartviewPageModule)
  },
  {
    path: 'payments',
    loadChildren: () => import('./page/payments/payments.module').then( m => m.PaymentsPageModule)
  },
  {
    path: 'view-product',
    loadChildren: () => import('./page/view-product/view-product.module').then( m => m.ViewProductPageModule)
  },

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
