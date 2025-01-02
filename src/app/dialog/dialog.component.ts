import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { HeadlineComponent } from '../headline/headline.component';
import { TextComponent } from '../text/text.component';
import { ButtonComponent } from '../button/button.component';

@Component({
  selector: 'app-dialog',
  standalone: true,
  imports: [CommonModule, HeadlineComponent, TextComponent, ButtonComponent],
  templateUrl: './dialog.component.html',
  styleUrl: './dialog.component.css'
})
export class DialogComponent {
  showConfirmDialog = true;

  cancel() {
    console.log('Invoice deleted');
    location.reload();
  }

  delete() {
    this.showConfirmDialog = false;
  }
}
