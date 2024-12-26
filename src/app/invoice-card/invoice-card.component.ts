import { Component, OnInit,signal  } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { IconComponent } from "../icon/icon.component";
import { HeaderComponent } from "../header/header.component";
import { Router } from '@angular/router';
import { DataService } from '../shared/data.service';
import { Invoice } from '../shared/invoice.interface';

@Component({
  selector: 'app-invoice-card',
  standalone: true,
  imports: [HttpClientModule, CommonModule, IconComponent, HeaderComponent],
  templateUrl: './invoice-card.component.html',
  styleUrl: './invoice-card.component.css'
})
export class InvoiceCardComponent implements OnInit {
  selectedInvoiceSignal = signal<Invoice | null>(null);
  invoices: Invoice[] = [];

  constructor(private dataService: DataService, private router : Router) {}

  ngOnInit() {
    this.dataService.getData().subscribe((response) => {
      this.invoices= response; 
      console.log(this.invoices);
    });
  }




  viewCardDetail(invoice: Invoice): void {
    this.dataService.setSelectedInvoice(invoice);
    this.router.navigate(['/card-details']);
    console.log('viewCardDetail');
  }
}
