import { Component} from '@angular/core';
import { ButtonComponent } from "../button/button.component";
import { IconComponent } from "../icon/icon.component";
import { CommonModule, Location } from '@angular/common';
import { Invoice } from '../shared/invoice.interface';
import { DataService } from '../shared/data.service';
import { TextComponent } from "../text/text.component";
import { HeadlineComponent } from "../headline/headline.component";
import { DialogComponent } from "../dialog/dialog.component";

@Component({
  selector: 'app-invoice-detail-page',
  standalone: true,
  imports: [ButtonComponent, IconComponent, CommonModule, TextComponent, HeadlineComponent, DialogComponent],
  templateUrl: './invoice-detail-page.component.html',
  styleUrl: './invoice-detail-page.component.css'
})
export class InvoiceDetailPageComponent {
  selectedInvoice: Invoice | null = null;
  showDialog: boolean = false;

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
  }
  openDialog(): void {
    this.showDialog = true;
    // document.body.style.overflow = 'hidden';
  }

}
