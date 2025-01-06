import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';


@Component({
  selector: 'app-input-field',
  standalone: true,
  imports: [CommonModule,    ReactiveFormsModule
  ],
  templateUrl: './input-field.component.html',
  styleUrls: ['./input-field.component.css']
})
export class InputFieldComponent {
  @Input() label: string = '';
  @Input() control!: FormControl;

}
