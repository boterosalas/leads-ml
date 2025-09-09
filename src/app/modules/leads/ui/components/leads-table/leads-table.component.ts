import {
  AfterViewInit,
  Component,
  Input,
  OnInit,
  ViewChild,
  ViewEncapsulation,
} from '@angular/core';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { Lead, LeadsResponse } from '../../../domain/models/leads.model';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatSort, MatSortModule } from '@angular/material/sort';

@Component({
  selector: 'app-leads-table',
  imports: [MatTableModule, MatPaginatorModule, MatSortModule],
  templateUrl: './leads-table.component.html',
  styleUrl: './leads-table.component.scss',
  encapsulation: ViewEncapsulation.None,
})
export class LeadsTableComponent implements OnInit, AfterViewInit {
  displayedColumns: string[] = ['id', 'name', 'email', 'phone'];
  dataSource!: MatTableDataSource<Lead>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  _leadsList!: Lead[];
  @Input() set leadsData(leadsResponse: LeadsResponse) {
    this._leadsList = leadsResponse.results;
    this.dataSource = new MatTableDataSource(this._leadsList);
  }

  constructor() {
    // Assign the data to the data source for the table to render
  }

  ngOnInit(): void {}

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
}
