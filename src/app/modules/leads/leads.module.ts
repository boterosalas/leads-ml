import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { leadsRoutes } from './leads.routes';

@NgModule({
  declarations: [],
  imports: [CommonModule, RouterModule.forChild(leadsRoutes)],
})
export class LeadsModule {}
