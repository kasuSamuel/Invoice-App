import { Component, OnInit } from '@angular/core';
import { ButtonComponent } from "../button/button.component";
import { DataService } from '../shared/data.service';
import { CommonModule } from '@angular/common';
import { CalenderComponent } from "../calender/calender.component";
import { InputFieldComponent } from "../input-field/input-field.component";
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule, FormBuilder, FormGroup, FormArray, Validators } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import {  FormControl } from '@angular/forms';
import { DropdownComponent } from "../dropdown/dropdown.component";



@Component({
  selector: 'app-create-invoice-full-form-page',
  standalone: true,
  imports: [ReactiveFormsModule, ButtonComponent, CommonModule, CalenderComponent, InputFieldComponent, FormsModule, HttpClientModule, DropdownComponent],
  templateUrl: './create-invoice-full-form-page.component.html',
  styleUrls: ['./create-invoice-full-form-page.component.css']
})
export class CreateInvoiceFullFormPageComponent implements OnInit {
  invoiceForm: FormGroup = this.fb.group({});
  sidebarVisible: boolean = false;

  constructor(private dataService: DataService, private fb: FormBuilder) {}

  ngOnInit(): void {
    this.dataService.initTheme();
    this.dataService.sidebarVisibility$.subscribe((visible) => {
      this.sidebarVisible = visible;
    });

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
      items: this.fb.array([]),
    });
  }

  get items(): FormArray {
    return this.invoiceForm.get('items') as FormArray;
  }

  addItem(): void {
    const itemForm = this.fb.group({
      itemName: ['', Validators.required],
      quantity: ['', [Validators.required, Validators.min(1)]],
      price: ['', [Validators.required, Validators.min(0)]],
    });
    this.items.push(itemForm);
  }

  removeItem(index: number): void {
    this.items.removeAt(index);
  }

  onSubmit(): void {
    if (this.invoiceForm.valid) {
      console.log(this.invoiceForm.value);
    } else {
      console.log('Form is invalid');
    }
  }

  getControl(controlPath: string): FormControl {
    const control = this.invoiceForm.get(controlPath);
    if (!control) {
      throw new Error(`Control with path '${controlPath}' not found.`);
    }
    return control as FormControl;
  }

  discardChanges(): void {
    location.reload();
this.invoiceForm.reset();
  }
}

