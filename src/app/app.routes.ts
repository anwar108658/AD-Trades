import type { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'home',
    loadComponent: () => import('./home/home.page').then((m) => m.HomePage),
    children: [
      {
        path: 'employee',
        loadComponent: () => import('./features/employee/employee.page').then((m) => m.EmployeePage),
      },
      {
        path: 'profile',
        loadComponent: () => import('./features/profile/profile.page').then((m) => m.ProfilePage),
      },
      {
        path: 'dashboard',
        loadComponent: () => import('./features/dashboard/dashboard.page').then((m) => m.DashboardPage),
      },
      {
        path: 'customers',
        loadComponent: () => import('./features/customers/customers.page').then((m) => m.CustomersPage),
      },
    ],
  },
  {
    path: 'login',
    loadComponent: () => import('./features/auth/login/login.page').then((m) => m.LoginPage),
  },
  {
    path: 'sales',
    loadComponent: () => import('./featurea/sales/sales.page').then((m) => m.SalesPage),
  },
  {
    path: 'recovery',
    loadComponent: () => import('./features/recovery/recovery.page').then((m) => m.RecoveryPage),
  },
];
