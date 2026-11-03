import type { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full',
  },
  // {
  //   path: 'login',
  //   loadComponent: () => import('./home/home.page').then((m) => m.HomePage),
  // },
  {
    path: 'login',
    loadComponent: () => import('./features/auth/login/login.page').then((m) => m.LoginPage),
  },
  {
    path: 'profile',
    loadComponent: () => import('./features/employee/employee.page').then((m) => m.EmployeePage),
  },
  {
    path: 'employee',
    loadComponent: () => import('./features/employee/employee.page').then((m) => m.EmployeePage),
  },
];
