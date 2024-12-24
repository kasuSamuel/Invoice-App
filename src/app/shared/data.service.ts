import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private themeKey: string = 'theme';
  private sidebarVisibility = new BehaviorSubject<boolean>(false); // false means hidden
  sidebarVisibility$ = this.sidebarVisibility.asObservable();

  constructor() {}


  toggleSidebar() {
    this.sidebarVisibility.next(!this.sidebarVisibility.value); // Toggle the visibility
  }

  showSidebar() {
    this.sidebarVisibility.next(true); // Explicitly show the sidebar
  }

  hideSidebar() {
    this.sidebarVisibility.next(false); // Explicitly hide the sidebar
  }


  // Get the current theme (light/dark)
  getTheme(): string | null {
    return localStorage.getItem(this.themeKey);
  }

  // Set the theme in localStorage and apply it to the body


  setTheme(theme: string): void {
    localStorage.setItem(this.themeKey, theme); 
    document.body.setAttribute('data-theme', theme); 
  }

  // Initialize the theme based on localStorage (this can be called when the app starts)
  initTheme(): void {
    const savedTheme = this.getTheme();
    if (savedTheme) {
      document.body.setAttribute('data-theme', savedTheme);
    } else {
      // Default to light theme if not set
      document.body.setAttribute('data-theme', 'light');
    }
  }

}
