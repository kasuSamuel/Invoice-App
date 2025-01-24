import { DataService } from './../shared/data.service';
import {
  Component,
  OnInit,
  Output,
  EventEmitter,
} from '@angular/core';
import { HeadlineComponent } from '../headline/headline.component';
import { ButtonComponent } from '../button/button.component';
import { Invoice } from '../shared/invoice.interface';
import { TextComponent } from '../text/text.component';
import { FilterComponent } from '../filter/filter.component';
import { CommonModule } from '@angular/common';
import { Store, select } from '@ngrx/store';
import { AppState } from '../store/invoice.state';
import { selectFilteredInvoicesCount } from '../store/invoice.selectors';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    HeadlineComponent,
    ButtonComponent,
    TextComponent,
    FilterComponent,
    CommonModule,
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
})
export class HeaderComponent implements OnInit {
  constructor(
    private dataService: DataService,
    private store: Store<AppState>
  ) {}
  invoices: Invoice[] = [];
  isMobile: boolean = false;
  invoiceText: string = '';
  isMobile$ = this.dataService.isMobile$;
  invoiceCount$ = this.store.pipe(select(selectFilteredInvoicesCount));

  @Output() filtersChanged = new EventEmitter<any[]>();

  ngOnInit(): void {
    this.dataService.initTheme();

  }
  onFiltersChanged(filters: any[]): void {
    this.filtersChanged.emit(filters); // Forward the filters to the parent (InvoiceCardComponent)
  }
  toggleSidebar() {
    this.dataService.toggleSidebar(); 
  }
}
