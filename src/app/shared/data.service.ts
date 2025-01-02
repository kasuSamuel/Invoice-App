import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Invoice } from './invoice.interface';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  // Theme management
  private themeKey: string = 'theme';

  // Sidebar visibility management
  private sidebarVisibility = new BehaviorSubject<boolean>(false);
  sidebarVisibility$ = this.sidebarVisibility.asObservable();

  // Selected invoice management
  private selectedInvoiceSubject = new BehaviorSubject<Invoice | null>(null);
  selectedInvoice$ = this.selectedInvoiceSubject.asObservable();

  // Cards data management
  private cardsSource = new BehaviorSubject<any[]>([]);
  currentCards = this.cardsSource.asObservable();

  // Mobile device check management
  private isMobileSubject = new BehaviorSubject<boolean>(window.innerWidth <= 768);
  isMobile$ = this.isMobileSubject.asObservable();

  // Filtered count management
  private filteredCountSubject = new BehaviorSubject<number>(0);
  filteredCount$ = this.filteredCountSubject.asObservable();

  constructor(private http: HttpClient) {
    // Initialize viewport resizing listener
    window.addEventListener('resize', this.updateViewport.bind(this));

    // Initialize selected invoice from localStorage if available
    const savedInvoice = localStorage.getItem('selectedInvoice');
    if (savedInvoice) {
      this.selectedInvoiceSubject.next(JSON.parse(savedInvoice));
    }

    // Initialize theme on page load
    this.initTheme();
  }

  // Fetch invoice data from the JSON file
  getData(): Observable<Invoice[]> {
    return this.http.get<Invoice[]>('../../assets/data.json');
  }

  // Sidebar toggle methods
  toggleSidebar(): void {
    this.sidebarVisibility.next(!this.sidebarVisibility.value);
  }

  showSidebar(): void {
    this.sidebarVisibility.next(true);
  }

  hideSidebar(): void {
    this.sidebarVisibility.next(false);
  }

  // Theme management methods
  getTheme(): string | null {
    return localStorage.getItem(this.themeKey);
  }

  setTheme(theme: string): void {
    localStorage.setItem(this.themeKey, theme);
    document.body.setAttribute('data-theme', theme);
  }

  initTheme(): void {
    const savedTheme = this.getTheme();
    if (savedTheme) {
      document.body.setAttribute('data-theme', savedTheme);
    } else {
      document.body.setAttribute('data-theme', 'light');
    }
  }

  // Selected invoice management methods
  setSelectedInvoice(invoice: Invoice): void {
    this.selectedInvoiceSubject.next(invoice);
    localStorage.setItem('selectedInvoice', JSON.stringify(invoice));
  }

  getSelectedInvoice(): Observable<Invoice | null> {
    return this.selectedInvoice$;
  }

  // Cards data management
  updateCards(cards: any[]): void {
    this.cardsSource.next(cards);
  }

  // Mobile viewport update
  private updateViewport(): void {
    this.isMobileSubject.next(window.innerWidth <= 600);
  }

  // Filtered count management
  setFilteredCount(count: number): void {
    this.filteredCountSubject.next(count);
  }
}
