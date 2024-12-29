import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Invoice } from './invoice.interface';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private themeKey: string = 'theme';
  private sidebarVisibility = new BehaviorSubject<boolean>(false);
  sidebarVisibility$ = this.sidebarVisibility.asObservable();
  
  // Add BehaviorSubject for selected invoice
  private selectedInvoiceSubject = new BehaviorSubject<Invoice | null>(null);
  selectedInvoice$ = this.selectedInvoiceSubject.asObservable();

  constructor(private http: HttpClient) { 
    window.addEventListener('resize', this.updateViewport.bind(this));

  }

  getData(): Observable<Invoice[]> {
    return this.http.get<Invoice[]>('../../assets/data.json');
  }

  toggleSidebar() {
    this.sidebarVisibility.next(!this.sidebarVisibility.value);
  }

  showSidebar() {
    this.sidebarVisibility.next(true);
  }

  hideSidebar() {
    this.sidebarVisibility.next(false);
  }

  // Get the current theme
  getTheme(): string | null {
    return localStorage.getItem(this.themeKey);
  }

  // Set the theme in localStorage
  setTheme(theme: string): void {
    localStorage.setItem(this.themeKey, theme);
    document.body.setAttribute('data-theme', theme);
  }

  // Initialize the theme based on localStorage
  initTheme(): void {
    const savedTheme = this.getTheme();
    if (savedTheme) {
      document.body.setAttribute('data-theme', savedTheme);
    } else {
      document.body.setAttribute('data-theme', 'light');
    }
  }

  // Set selected invoice
  setSelectedInvoice(invoice: Invoice): void {
    this.selectedInvoiceSubject.next(invoice);
  }

  // Get selected invoice
  getSelectedInvoice(): Observable<Invoice | null> {
    return this.selectedInvoice$;
  }



  // getFilteredItems(selectedStatuses: string[]): Observable<Invoice[]> {
  //   if (!selectedStatuses.length) {
  //     return of(this.items); // Return all items if no filter is selected
  //   }
  //   const filtered = this.items.filter((item) => selectedStatuses.includes(item.status));
  //   return of(filtered);
  // }




  private cardsSource = new BehaviorSubject<any[]>([]); // Initialize with an empty array
  currentCards = this.cardsSource.asObservable(); // Observable to get current cards

  updateCards(cards: any[]): void {
    this.cardsSource.next(cards); // Push new cards to the BehaviorSubject
  }


  private isMobileSubject = new BehaviorSubject<boolean>(window.innerWidth <= 768);
  isMobile$ = this.isMobileSubject.asObservable();


  private updateViewport() {
    this.isMobileSubject.next(window.innerWidth <= 600);
  }
}
