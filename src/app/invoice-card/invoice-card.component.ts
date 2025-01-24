import { Component, OnInit, signal } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { IconComponent } from "../icon/icon.component";
import { HeaderComponent } from "../header/header.component";
import { Router } from '@angular/router';
import { DataService } from '../shared/data.service';
import { Invoice } from '../shared/invoice.interface';
import { HeadlineComponent } from "../headline/headline.component";
import { TextComponent } from "../text/text.component";
import { Store, select } from '@ngrx/store';
import { loadCardDetails, loadData } from '../store/invoice.actions';
import { selectCardLoading , selectCardError, selectInvoices, selectFilteredInvoices} from '../store/invoice.selectors';
import { AppState } from '../store/invoice.state';
import { map, Observable } from 'rxjs';
import { EmptyInvoicePageComponent } from "../empty-invoice-page/empty-invoice-page.component";

@Component({
  selector: 'app-invoice-card',
  standalone: true,
  imports: [HttpClientModule, CommonModule, IconComponent, HeaderComponent, HeadlineComponent, TextComponent, EmptyInvoicePageComponent],
  templateUrl: './invoice-card.component.html',
  styleUrls: ['./invoice-card.component.css']
})
export class InvoiceCardComponent implements OnInit {
  invoices = this.store.selectSignal(selectFilteredInvoices);
  get hasInvoices(): boolean {
    return this.invoices && this.invoices.length > 0;
  }


  constructor(private dataService: DataService, private router: Router,private store: Store<AppState>) {
    
    // this.store.dispatch(loadData());

  }
  ngOnInit() {
    // Fetch invoice data on component initialization
    // this.dataService.getData().subscribe((response) => {
    //   this.invoices = response;

    
    // this.filterInvoices();


  

    // this.cardInfo$.subscribe((data) => {
    //   console.log('2', data);  
    // });    





  }
      // this.filteredInvoices = this.invoices.filter(invoice => {
      //   return  this.currentFilters.some(filter => filter === invoice.status);
      // }); // Initially, show all invoices
      

  

  // Method to handle filter changes
  // onFiltersChanged(selectedFilters: string[]): void {
  //   this.currentFilters = selectedFilters;
  //   console.log('Selected Filters:', this.currentFilters);
  //   this.filterInvoices();
  // }

  // Filter invoices based on the selected filters
  // filterInvoices(): void {
  //   if (this.currentFilters.length === 0) {
  //     // If no filters, show all invoices
  //     this.filteredInvoices = this.invoices;
  //   } else {
  //     // Filter invoices based on selected filters
  //     this.filteredInvoices = this.invoices.filter(invoice =>
  //       this.currentFilters.some(filter => filter === invoice.status) // Match any of the selected filters
  //     );
  //   }
  //   this.dataService.setFilteredCount(this.filteredInvoices.length);

  //   console.log('Filtered Invoices:', this.filteredInvoices.length);
  // }

  // View the card details for a specific invoice
  viewCardDetail(invoice: Invoice): void {
    this.dataService.setSelectedInvoice(invoice);
    this.router.navigate(['/card-details', invoice.id]);
    this.store.dispatch(loadCardDetails({cardId: invoice.id}));

  }
}

  

