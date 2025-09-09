import { Component, OnInit, signal } from '@angular/core';
import { A11yModule } from '@angular/cdk/a11y';
import { MatButtonModule } from '@angular/material/button';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { provideNativeDateAdapter } from '@angular/material/core';
import { MatSelectModule } from '@angular/material/select';
import { MatChipInputEvent, MatChipsModule } from '@angular/material/chips';
import {COMMA, ENTER} from '@angular/cdk/keycodes';
import {
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
} from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-leads-filter',
  imports: [
    A11yModule,
    MatButtonModule,
    MatDatepickerModule,
    MatInputModule,
    MatFormFieldModule,
    MatSelectModule,
    MatIconModule,
    FormsModule,
    ReactiveFormsModule,
    MatChipsModule,
  ],
  providers: [provideNativeDateAdapter()],
  templateUrl: './leads-filter.component.html',
  styleUrl: './leads-filter.component.scss',
})
export class LeadsFilterComponent implements OnInit {
  private filterForm!: FormGroup;
  startDateControl = new FormControl('');
  endDateControl = new FormControl('');
  contactTypeControl = new FormControl('');
  itemIdControl = new FormControl('');
  buyerIdControl = new FormControl('');
  contactTypes = [
    { label: 'Whatsapp', value: 'whatsapp' },
    { label: 'Question', value: 'question' },
    { label: 'Call', value: 'call' },
    { label: 'Credit', value: 'credit' },
  ];
  buyerIds = signal<string[]>([]);
  readonly separatorKeysCodes = [ENTER, COMMA] as const;

  ngOnInit(): void {
    this.createForm();
  }

  createForm() {
    this.filterForm = new FormGroup({
      startDate: this.startDateControl,
      endDate: this.endDateControl,
      contactType: this.contactTypeControl,
      itemId: this.itemIdControl,
      buyerId: this.buyerIdControl,
    });
    this.filterForm.valueChanges.subscribe(console.log);
  }

  add(event: MatChipInputEvent): void {
    const value = (event.value || '').trim();

    // Add our fruit
    if (value) {
      this.buyerIds.update((fruits) => [...fruits, value]);
    }

    // Clear the input value
    event.chipInput!.clear();
  }

  remove(fruit: string): void {
    this.buyerIds.update((fruits) => {
      const index = fruits.indexOf(fruit);
      if (index < 0) {
        return fruits;
      }

      fruits.splice(index, 1);
      return [...fruits];
    });
  }
}
