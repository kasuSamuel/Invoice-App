import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ThemeToggleComponent } from './theme-toggle/theme-toggle.component';
import { HeadlineComponent } from './headline/headline.component';
import { TextComponent } from './text/text.component';
import { IconComponent } from './icon/icon.component';
import { AvatarComponent } from './avatar/avatar.component';
import { BadgeComponent } from './badge/badge.component';
import { FilterComponent } from './filter/filter.component';
import { InvoiceCardComponent } from './invoice-card/invoice-card.component';
import { DialogComponent } from './dialog/dialog.component';
import { DeleteCardComponent } from './delete-card/delete-card.component';
import { EmptyPageComponent } from './empty-page/empty-page.component';
import { InvoiceDetailPageComponent } from './invoice-detail-page/invoice-detail-page.component';
import { InvoiceSideDrawerComponent } from './invoice-side-drawer/invoice-side-drawer.component';
import { InvoiceFilterComponent } from './invoice-filter/invoice-filter.component';
import { SideNavbarComponent } from "./side-navbar/side-navbar.component";
import { EmptyInvoicePageComponent } from "./empty-invoice-page/empty-invoice-page.component";
import { HeaderComponent } from "./header/header.component";
import { DataService } from './shared/data.service';
import { CreateInvoiceFullFormPageComponent } from "./create-invoice-full-form-page/create-invoice-full-form-page.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    ThemeToggleComponent,
    HeadlineComponent,
    TextComponent,
    IconComponent,
    AvatarComponent,
    BadgeComponent,
    FilterComponent,
    InvoiceCardComponent,
    DialogComponent,
    DeleteCardComponent,
    EmptyPageComponent,
    InvoiceDetailPageComponent,
    InvoiceSideDrawerComponent,
    InvoiceFilterComponent,
    SideNavbarComponent,
    EmptyInvoicePageComponent,
    HeaderComponent,
    CreateInvoiceFullFormPageComponent
],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent implements OnInit {

  isDarkMode:  boolean = false;
constructor(private dataService:DataService) {
}

ngOnInit(): void {
  this.isDarkMode = this.dataService.getTheme() === 'dark';
}

}
