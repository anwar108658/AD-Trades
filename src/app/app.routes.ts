import type { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full',
  },
  {
    path: 'home',
    loadComponent: () => import('./home/home.page').then((m) => m.HomePage),
  },
  {
    path: 'login',
    loadComponent: () => import('./features/auth/login/login.page').then((m) => m.LoginPage),
  },
  {
    path: 'employee',
    loadComponent: () => import('./features/employee/employee.page').then((m) => m.EmployeePage),
  },
  {
    path: 'profile',
    loadComponent: () => import('./features/profile/profile.page').then((m) => m.ProfilePage),
  },
];
