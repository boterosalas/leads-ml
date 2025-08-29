import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('./modules/leads/leads.module').then((m) => m.LeadsModule),
  },
];
