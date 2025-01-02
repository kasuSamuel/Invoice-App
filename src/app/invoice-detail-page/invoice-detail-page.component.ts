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
import { Store } from '@ngrx/store';
import { DeleteCardComponent } from "../delete-card/delete-card.component";

@Component({
  selector: 'app-invoice-detail-page',
  standalone: true,
  imports: [ButtonComponent, IconComponent, CommonModule, TextComponent, HeadlineComponent, DialogComponent, DeleteCardComponent],
  templateUrl: './invoice-detail-page.component.html',
  styleUrl: './invoice-detail-page.component.css'
})
export class InvoiceDetailPageComponent implements OnInit {
  selectedInvoice: Invoice | null = null;
  showDialog: boolean = false;
  invoiceId: string | null = null;
  invoice: Invoice | null = null;

  cardInfo: Invoice[] | null = null;
  loading: boolean = false;

  constructor(
    private store: Store,
    private location: Location,
    private dataService: DataService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    // Attempt to get the selected invoice from the service
    this.dataService.getSelectedInvoice().subscribe(invoice => {
      this.selectedInvoice = invoice;

      // If no invoice is set through the service, try fetching it from the route parameter
      if (!this.selectedInvoice) {
        // Get the invoice ID from the route parameters
        this.invoiceId = this.route.snapshot.paramMap.get('id');

        // Fetch the invoice by ID from the data source (API or local data)
        if (this.invoiceId) {
          this.dataService.getData().subscribe(invoices => {
            this.invoice = invoices.find(inv => inv.id === this.invoiceId) || null;
            if (this.invoice) {
              // Set the selected invoice in the service to make it available globally
              this.dataService.setSelectedInvoice(this.invoice);
            }
          });
        }
      }
    });
  }

  goBack() {
    this.location.back(); // Go back to the previous page
  }

  openDialog(): void {
    this.showDialog = true;
    // document.body.style.overflow = 'hidden'; // Uncomment if needed to disable scrolling
  }
}
