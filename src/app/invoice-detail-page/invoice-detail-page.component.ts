import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { Invoice } from '../shared/invoice.interface';
import { DataService } from '../shared/data.service';
import { ButtonComponent } from "../button/button.component";
import { IconComponent } from "../icon/icon.component";
import { CommonModule } from '@angular/common';
import { TextComponent } from "../text/text.component";
import { HeadlineComponent } from "../headline/headline.component";
import { DialogComponent } from "../dialog/dialog.component";
import { select, Store } from '@ngrx/store';
import { LoginPageComponent } from "../login-page/login-page.component";
import { HttpClientModule } from '@angular/common/http';
import { AppState } from '../store/invoice.state';
import { selectFilteredInvoices } from '../store/invoice.selectors';

@Component({
  selector: 'app-invoice-detail-page',
  standalone: true,
  imports: [ButtonComponent, IconComponent, CommonModule, TextComponent, HeadlineComponent, DialogComponent, HttpClientModule,],
  templateUrl: './invoice-detail-page.component.html',
  styleUrl: './invoice-detail-page.component.css'
})
export class InvoiceDetailPageComponent implements OnInit {
  // selectedInvoice: Invoice | null = null;
  showDialog: boolean = false;
  invoiceId: string | null = null;
  selectedInvoice: any; // The type of the invoice, e.g., Invoice


  constructor(
    private store: Store<AppState>,
    private location: Location,
    private dataService: DataService,
    private route: ActivatedRoute
  ) {
  }

  ngOnInit(): void {
    this.store.select(selectFilteredInvoices).subscribe(filteredInvoices => {
      if (this.selectedInvoice) {
        return;
      }
      this.invoiceId = this.route.snapshot.paramMap.get('id');
      if (this.invoiceId) {
        const invoice = filteredInvoices.find(inv => inv.id === this.invoiceId) || null;
        if (invoice) {
          this.selectedInvoice = invoice;
          console.log(this.selectedInvoice.id);
        }
      }
    });

  }

  goBack() {
    this.location.back();
  }


  selectedPaid = { status: 'paid' };  // Or dynamically set this value



  openDialog(): void {
    this.showDialog = true;
    // document.body.style.overflow = 'hidden'; // Uncomment if needed to disable scrolling
  }




  // This method will be triggered when the button is clicked
  markAsPaid() {

    if (this.selectedInvoice.status !== 'paid') {
      this.selectedInvoice.status = 'paid';
      console.log(this.selectedInvoice.status);
    }
  }


  toggleSidebar() {
    this.dataService.toggleSidebar();
  }
}
