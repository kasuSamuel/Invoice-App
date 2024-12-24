import { CommonModule } from '@angular/common';
import { Component, Input, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-button',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './button.component.html',
  styleUrl: './button.component.css',
  encapsulation: ViewEncapsulation.None 
})
export class ButtonComponent {
  @Input() label: string = ''; 
  @Input() icon: string = '';        
  @Input() customClass: string = ''; 


}
