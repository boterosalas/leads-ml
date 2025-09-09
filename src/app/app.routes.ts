import { Routes } from '@angular/router';
import { authGuard } from './modules/auth/guards/auth-guard.guard';

export const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('./modules/auth/auth.module').then((m) => m.AuthModule),
    pathMatch: 'full',
  },
  {
    path: 'leads',
    loadChildren: () =>
      import('./modules/leads/leads.module').then((m) => m.LeadsModule),
    // canActivate: [authGuard],
  },
  {
    path: '**',
    redirectTo: '',
  },
];
