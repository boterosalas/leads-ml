import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { leadsRoutes } from './leads.routes';
import { LeadsUsecaseService } from './domain/usecase/leads/leads-usecase.service';
import { LeadsGatewayService } from './domain/gateway/leads/leads-gateway.service';
import { LeadsService } from './infrastructure/leads/leads.service';

@NgModule({
  declarations: [],
  imports: [CommonModule, RouterModule.forChild(leadsRoutes)],
  providers: [
    LeadsUsecaseService,
    { provide: LeadsGatewayService, useClass: LeadsService },
  ],
})
export class LeadsModule {}
