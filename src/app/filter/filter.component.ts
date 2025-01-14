import { Component, HostListener, Output, EventEmitter } from '@angular/core';
import { FormsModule } from '@angular/forms'; // Import FormsModule for ngModel
import { HeadlineComponent } from '../headline/headline.component';
import { IconComponent } from '../icon/icon.component';
import { CommonModule } from '@angular/common';
import { Invoice } from '../shared/invoice.interface';
import { DataService } from '../shared/data.service';
import { HttpClientModule } from '@angular/common/http';
import { AppState } from '../store/invoice.state';
import { Store } from '@ngrx/store';
import { clearInvoiceFilter, setInvoiceFilter } from '../store/invoice.actions';

@Component({
  selector: 'app-filter',
  standalone: true,
  imports: [
    HttpClientModule,
    HeadlineComponent,
    IconComponent,
    FormsModule,
    CommonModule,
  ], // Include FormsModule
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css'],
})
export class FilterComponent {
  dropdownVisible = false;
  @Output() filtersChanged: EventEmitter<any[]> = new EventEmitter<any[]>();
  isMobile$ = this.dataService.isMobile$;

  constructor(
    private dataService: DataService,
    private store: Store<AppState>
  ) {}
  // Define the available filter options
  filterOptions = [
    { value: 'draft', checked: false },
    { value: 'pending', checked: false },
    { value: 'paid', checked: false },
  ];
  // Toggles dropdown visibility
  toggleDropdown(event: MouseEvent) {
    // Prevent click event from propagating to the document to avoid closing the dropdown
    event.stopPropagation();
    this.dropdownVisible = !this.dropdownVisible;
  }

  selectedFilters: string[] = [];
  onFilterChange(option: { value: string; checked: boolean }): void {
    const { checked, value } = option;
    const index = this.selectedFilters.findIndex((filter) => filter === value);
    if (checked && index === -1) {
      this.store.dispatch(setInvoiceFilter({ status: value }));
    } else {
      this.store.dispatch(clearInvoiceFilter({ status: value }));
    }
  }

  // Close dropdown if clicked outside
  @HostListener('document:click', ['$event'])
  closeDropdown(event: MouseEvent) {
    const clickedInside = (event.target as HTMLElement).closest(
      '.filter-container'
    );
    if (!clickedInside) {
      this.dropdownVisible = false;
    }
  }
}
