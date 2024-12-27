import { DataService } from './../shared/data.service';
import { Component, OnInit } from '@angular/core';
import { IconComponent } from "../icon/icon.component";
import { HeadlineComponent } from "../headline/headline.component";
import { ButtonComponent } from "../button/button.component";
import { Invoice } from '../shared/invoice.interface';
import { TextComponent } from "../text/text.component";
import { FilterComponent } from "../filter/filter.component";

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [IconComponent, HeadlineComponent, ButtonComponent, TextComponent, FilterComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent implements OnInit {
  constructor(private dataService: DataService) {}
  invoices: Invoice[] = [];
  totalNumber : number = 0;

  ngOnInit(): void {
    this.dataService.initTheme();
    this.dataService.getData().subscribe((response) => {
      this.invoices= response; 
      this.totalNumber = this.invoices.length;
      console.log(this.invoices.length);
    });
  }


  toggleSidebar() {
    this.dataService.toggleSidebar(); // Toggle the sidebar visibility
  }
}
