import { Routes } from '@angular/router';

export const routes: Routes = [

  {path:'',redirectTo:'landing-login',pathMatch:"full"},

  {
    path: '',
    loadChildren: () => import('./tabs/tabs.routes').then((m) => m.routes),
  },

  {
    path: 'login',
    loadComponent: () => import('./login/login.page').then( m => m.LoginPage)
  },
  {
    path: 'landing-login',
    loadComponent: () => import('./landing-login/landing-login.page').then( m => m.LandingLoginPage)
  },

  
  

];
