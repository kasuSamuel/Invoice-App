import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Store } from '@ngrx/store';
import { loadData } from './store/invoice.actions';
import { DataService } from './shared/data.service';
import { SideNavbarComponent } from './side-navbar/side-navbar.component';
import { CreateInvoiceFullFormPageComponent } from './create-invoice-full-form-page/create-invoice-full-form-page.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
SideNavbarComponent,
CreateInvoiceFullFormPageComponent
],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent implements OnInit {

  isDarkMode:  boolean = false;
constructor(private dataService:DataService, private store:Store) {
}

ngOnInit(): void {
  this.isDarkMode = this.dataService.getTheme() === 'dark';
  this.store.dispatch(loadData());
}

}
