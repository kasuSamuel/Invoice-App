import { Component, HostListener } from '@angular/core';
import { FormsModule } from '@angular/forms'; // Import FormsModule for ngModel
import { HeadlineComponent } from "../headline/headline.component";
import { IconComponent } from "../icon/icon.component";
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-filter',
  standalone: true,
  imports: [HeadlineComponent, IconComponent, FormsModule, CommonModule], // Include FormsModule
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css']
})
export class FilterComponent {
  dropdownVisible = false;

  // Define the available filter options
  filterOptions = [
    { label: 'Draft', value: 'draft', checked: false },
    { label: 'Pending', value: 'pending', checked: false },
    { label: 'Paid', value: 'paid', checked: false }
  ];

  // Toggles dropdown visibility
  toggleDropdown(event: MouseEvent) {
    // Prevent click event from propagating to the document to avoid closing the dropdown
    event.stopPropagation();
    this.dropdownVisible = !this.dropdownVisible;
  }

  // Handle filter changes
  onFilterChange() {
    // Log the state of all filters
    console.log('Filter state:', this.filterOptions);
  }

  // Close dropdown if clicked outside
  @HostListener('document:click', ['$event'])
  closeDropdown(event: MouseEvent) {
    const clickedInside = (event.target as HTMLElement).closest('.filter-container');
    if (!clickedInside) {
      this.dropdownVisible = false;
    }
  }
}
