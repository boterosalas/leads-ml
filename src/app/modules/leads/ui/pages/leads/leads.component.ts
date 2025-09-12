import { Component, OnInit, inject } from '@angular/core';
import { LeadsUsecaseService } from '../../../domain/usecase/leads/leads-usecase.service';
import {
  Lead,
  LeadsHttpRequest,
  LeadsResponse,
} from '../../../domain/models/leads.model';
import { LeadsTableComponent } from '../../components/leads-table/leads-table.component';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatDialog } from '@angular/material/dialog';
import { LeadsFilterComponent } from '../../components/leads-filter/leads-filter.component';
import { formatDate } from '../../../../../shared/helper/format-date';

@Component({
  selector: 'app-leads',
  imports: [LeadsTableComponent, MatButtonModule, MatIconModule],
  templateUrl: './leads.component.html',
  styleUrl: './leads.component.scss',
})
export class LeadsComponent implements OnInit {
  private readonly _matDialog = inject(MatDialog);
  private readonly leadsService = inject(LeadsUsecaseService);
  leadsData!: LeadsResponse;

  ngOnInit(): void {
    this.getLeads({});
  }

  private getLeads(params: LeadsHttpRequest) {
    this.leadsService.get(params).subscribe((leadsData: LeadsResponse) => {
      console.log({ leadsData });
      this.leadsData = leadsData;
    });
  }
  openFilter() {
    this._matDialog
      .open(LeadsFilterComponent, {
        height: '100vh',
        width: '100%',
        maxWidth: '400px',
        position: {
          right: '0px',
        },
        autoFocus: true,
        panelClass: 'leads-filter-panel',
      })
      .afterClosed()
      .subscribe((data: LeadsHttpRequest | null) => {
        console.log(data);
        if (data) {
          // llamar servicio con parámetros de búsqueda
          this.getLeads(data);
        }
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
