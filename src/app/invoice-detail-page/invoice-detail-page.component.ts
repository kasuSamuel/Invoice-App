import { Component } from '@angular/core';
import { IconComponent } from "../icon/icon.component";
import { ButtonComponent } from "../button/button.component";

@Component({
  selector: 'app-invoice-detail-page',
  standalone: true,
  imports: [IconComponent, ButtonComponent],
  templateUrl: './invoice-detail-page.component.html',
  styleUrl: './invoice-detail-page.component.css'
})
export class InvoiceDetailPageComponent {

}
