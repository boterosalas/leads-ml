import { Component, OnInit, inject } from '@angular/core';
import { LeadsUsecaseService } from '../../../domain/usecase/leads/leads-usecase.service';
import { Lead, LeadsResponse } from '../../../domain/models/leads.model';
import { LeadsTableComponent } from '../../components/leads-table/leads-table.component';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatDialogModule, MatDialog } from '@angular/material/dialog';
import { LeadsFilterComponent } from '../../components/leads-filter/leads-filter.component';

@Component({
  selector: 'app-leads',
  imports: [
    LeadsTableComponent,
    MatButtonModule,
    MatIconModule,
    // MatDialogModule,
  ],
  templateUrl: './leads.component.html',
  styleUrl: './leads.component.scss',
})
export class LeadsComponent implements OnInit {
  private readonly _matDialog = inject(MatDialog);
  private readonly leadsService = inject(LeadsUsecaseService);
  leadsData!: LeadsResponse;

  ngOnInit(): void {
    this.getLeads();
  }

  private getLeads() {
    this.leadsService.get({}).subscribe((leadsData: LeadsResponse) => {
      console.log({ leadsData });
      this.leadsData = leadsData;
    });
  }
  openFilter() {
    this._matDialog.open(LeadsFilterComponent, {
      height: '100vh',
      width: '100%',
      maxWidth: '400px',
      position: {
        right: '0px',
      },
      autoFocus: true,
      panelClass: 'leads-filter-panel',
    });
  }

  download() {
    const fileType = 'xlsx';
    this.leadsService.download(fileType).subscribe({
      next: (blob) => {
        const fileName = fileType === 'xlsx' ? 'archivo.xlsx' : 'archivo.csv';
        const url = window.URL.createObjectURL(blob);

        const a = document.createElement('a');
        a.href = url;
        a.download = fileName;
        a.click();

        window.URL.revokeObjectURL(url);
      },
      error: (err) => {
        console.error('Error al descargar archivo:', err);
      },
    });
  }
}
