import { DataService } from './../shared/data.service';
import { Component, HostListener, OnInit , Output, EventEmitter } from '@angular/core';
import { IconComponent } from "../icon/icon.component";
import { HeadlineComponent } from "../headline/headline.component";
import { ButtonComponent } from "../button/button.component";
import { Invoice } from '../shared/invoice.interface';
import { TextComponent } from "../text/text.component";
import { FilterComponent } from "../filter/filter.component";
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [IconComponent, HeadlineComponent, ButtonComponent, TextComponent, FilterComponent, CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent implements OnInit {
  constructor(private dataService: DataService) {}
  invoices: Invoice[] = [];
  totalNumber : number = 0;
  isMobile: boolean = false;
  invoiceText: string = '';
  @Output() filtersChanged = new EventEmitter<any[]>();

  ngOnInit(): void {
    this.dataService.initTheme();
    this.dataService.getData().subscribe((response) => {
      this.invoices= response; 
      this.totalNumber = this.invoices.length;
      console.log(this.invoices.length);
    });

  }

  onFiltersChanged(filters: any[]): void {
    this.filtersChanged.emit(filters); // Forward the filters to the parent (InvoiceCardComponent)
  }
  
  toggleSidebar() {
    this.dataService.toggleSidebar(); // Toggle the sidebar visibility
  }
}
