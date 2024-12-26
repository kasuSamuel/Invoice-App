import { Component} from '@angular/core';
import { ButtonComponent } from "../button/button.component";
import { IconComponent } from "../icon/icon.component";
import { CommonModule, Location } from '@angular/common';
import { Invoice } from '../shared/invoice.interface';
import { DataService } from '../shared/data.service';

@Component({
  selector: 'app-invoice-detail-page',
  standalone: true,
  imports: [ButtonComponent, IconComponent, CommonModule],
  templateUrl: './invoice-detail-page.component.html',
  styleUrl: './invoice-detail-page.component.css'
})
export class InvoiceDetailPageComponent {
  selectedInvoice: Invoice | null = null;
  
  constructor(private location: Location,private dataService: DataService) {
  }

  ngOnInit(): void {
    // Subscribe to the selected invoice
    this.dataService.getSelectedInvoice().subscribe(invoice => {
      this.selectedInvoice = invoice;
    });
  }
  goBack() {
    this.location.back(); 
    console.log('object is back');
  }
}
