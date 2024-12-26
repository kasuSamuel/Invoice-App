import { Component, OnInit } from '@angular/core';
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
  selectedInvoiceSignal() {
    throw new Error('Method not implemented.');
  }

  invoices: Invoice[] = [];

  constructor(private dataService: DataService, private router : Router) {}

  ngOnInit() {
    this.dataService.getData().subscribe((response) => {
      this.invoices= response; 
      console.log(this.invoices);
    });
  }

  viewCardDetail() {
    this.router.navigate(['/card-detail']);
  }
}
