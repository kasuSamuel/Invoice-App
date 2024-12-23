import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SideNavbarComponent } from './side-navbar/side-navbar.component';
import { HeaderComponent } from './header/header.component';
import { EmptyInvoicePageComponent } from './empty-invoice-page/empty-invoice-page.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
      RouterOutlet, 
      SideNavbarComponent,
      HeaderComponent,
      EmptyInvoicePageComponent
    ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'Invoice-App';
}
