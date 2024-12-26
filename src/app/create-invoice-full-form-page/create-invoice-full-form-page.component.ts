import { Component, OnInit } from '@angular/core';
import { HeadlineComponent } from "../headline/headline.component";
import { ButtonComponent } from "../button/button.component";
import { DataService } from '../shared/data.service';
import { CommonModule } from '@angular/common';
import { CalenderComponent } from "../calender/calender.component";
import { InputFieldComponent } from "../input-field/input-field.component";
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-create-invoice-full-form-page',
  standalone: true,
  imports: [HeadlineComponent, ButtonComponent, CommonModule, CalenderComponent, InputFieldComponent, FormsModule,],
  templateUrl: './create-invoice-full-form-page.component.html',
  styleUrl: './create-invoice-full-form-page.component.css'
})
export class CreateInvoiceFullFormPageComponent implements OnInit{
  streetAddress: string = '';
  city: string = '';
  postcode: string = '';
  country: string = '';
  clientName: string = '';
  clientEmail: string = '';
  clientAddress: string = '';
  billToCity: string = '';
  billToPostcode: string = '';
  billToCountry: string = '';
  paymentTerms: string = '';
  projectDescription: string = '';

  constructor(private dataService: DataService) {}

  sidebarVisible: boolean = false; // Track sidebar visibility
  ngOnInit(): void {
    this.dataService.initTheme();

    // Subscribe to the sidebar visibility changes
    this.dataService.sidebarVisibility$.subscribe((visible) => {
      this.sidebarVisible = visible;
    });
  }
  }



