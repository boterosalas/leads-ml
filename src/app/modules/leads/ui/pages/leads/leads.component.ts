import { Component, OnInit, inject } from '@angular/core';
import { LeadsUsecaseService } from '../../../domain/leads/usecase/leads-usecase.service';

@Component({
  selector: 'app-leads',
  imports: [],
  templateUrl: './leads.component.html',
  styleUrl: './leads.component.scss',
})
export class LeadsComponent implements OnInit {
  leadsService = inject(LeadsUsecaseService);

  ngOnInit(): void {
    this.getLeads();
  }

  private getLeads() {
    this.leadsService.get({}).subscribe((leads) => {
      console.log({ leads });
    });
  }
}
