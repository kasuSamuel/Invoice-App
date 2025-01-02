import { Component, OnInit } from '@angular/core';
import { IconComponent } from "../icon/icon.component";
import { HeadlineComponent } from "../headline/headline.component";
import { DataService } from '../shared/data.service';

@Component({
  selector: 'app-empty-invoice-page',
  standalone: true,
  imports: [IconComponent, HeadlineComponent],
  templateUrl: './empty-invoice-page.component.html',
  styleUrl: './empty-invoice-page.component.css'
})
export class EmptyInvoicePageComponent implements OnInit {
  constructor(private dataService: DataService) {}

  ngOnInit(): void {
    this.dataService.initTheme();
  }

}
