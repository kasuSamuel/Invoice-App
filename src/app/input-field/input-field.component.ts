import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-input-field',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  templateUrl: './input-field.component.html',
  styleUrls: ['./input-field.component.css']
})
export class InputFieldComponent {
  // Label for the input field, defaulting to an empty string.
  @Input() label: string = '';

  // The form group containing the input field control.
  @Input() formGroup: FormGroup | null = null;

  // The name of the form control in the form group.
  @Input() controlName: string = '';

  // The type of the input field (text, password, email, etc.), defaulting to 'text'.
  @Input() type: string = 'text';

  // Helper method to check if the control is invalid and has been interacted with.
  get isInvalid(): boolean {
    const control = this.formGroup?.get(this.controlName);
    return !!(control && control.invalid && (control.touched || control.dirty));
  }

  // Helper method to check if the control has a required validation error.
  get isRequiredError(): boolean {
    const control = this.formGroup?.get(this.controlName);
    return !!(control && control.hasError('required'));
  }
}
