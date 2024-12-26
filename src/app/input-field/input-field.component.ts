import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-input-field',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './input-field.component.html',
  styleUrl: './input-field.component.css'
})
export class InputFieldComponent {

  @Input() labelFor: string = '';       // This will bind to the 'for' attribute of label
  @Input() labelText: string = '';      // This will be the label text
  @Input() inputId: string = '';        // This will be the id of the input element
  @Input() inputType: string = 'text';  // This will define the input type
  @Input() placeholder: string = '';    // This will be the placeholder for the input field
  @Input() value: string = ''; 
}
