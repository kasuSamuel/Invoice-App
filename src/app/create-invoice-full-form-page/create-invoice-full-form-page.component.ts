import { Component, OnInit } from '@angular/core';
import { HeadlineComponent } from "../headline/headline.component";
import { ButtonComponent } from "../button/button.component";
import { DataService } from '../shared/data.service';
import { CommonModule } from '@angular/common';
import { CalenderComponent } from "../calender/calender.component";
import { InputFieldComponent } from "../input-field/input-field.component";
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule, FormBuilder, FormGroup, FormArray, Validators } from '@angular/forms';

@Component({
  selector: 'app-create-invoice-full-form-page',
  standalone: true,
  imports: [ReactiveFormsModule, HeadlineComponent, ButtonComponent, CommonModule, CalenderComponent, InputFieldComponent, FormsModule],
  templateUrl: './create-invoice-full-form-page.component.html',
  styleUrls: ['./create-invoice-full-form-page.component.css']
})
export class CreateInvoiceFullFormPageComponent implements OnInit {

  invoiceForm: FormGroup = this.fb.group({});  // Initialize here

  constructor(private dataService: DataService, private fb: FormBuilder) { }

  sidebarVisible: boolean = false;

  ngOnInit(): void {
    // Initialize theme and sidebar visibility from the service
    this.dataService.initTheme();
    this.dataService.sidebarVisibility$.subscribe((visible) => {
      this.sidebarVisible = visible;
    });

    // Initialize the form
    this.invoiceForm = this.fb.group({
      billFrom: this.fb.group({
        streetAddress: ['', Validators.required],
        city: ['', Validators.required],
        postcode: ['', Validators.required],
        country: ['', Validators.required],
      }),
      billTo: this.fb.group({
        clientName: ['', Validators.required],
        clientEmail: ['', [Validators.required, Validators.email]],
        clientAddress: ['', Validators.required],
        billToCity: ['', Validators.required],
        billToPostcode: ['', Validators.required],
        billToCountry: ['', Validators.required],
      }),
      paymentTerms: ['Select', Validators.required],
      projectDescription: ['', Validators.required],
      items: this.fb.array([])  // Dynamic array for items
    });
  }

  // Getter for the items FormArray
  get items() {
    return (this.invoiceForm.get('items') as FormArray);
  }

  // Method to add a new item to the items array
  addItem() {
    const itemForm = this.fb.group({
      itemName: ['', Validators.required],
      quantity: ['', [Validators.required, Validators.min(1)]],
      price: ['', [Validators.required, Validators.min(0)]],
    });
    this.items.push(itemForm);
  }

  // Method to remove an item from the items array
  removeItem(index: number) {
    this.items.removeAt(index);
  }

  // Form submission handler
  onSubmit() {
    if (this.invoiceForm.valid) {
      console.log(this.invoiceForm.value);  // Log form data or send to a service
    } else {
      console.log('Form is invalid');
    }
  }
}
