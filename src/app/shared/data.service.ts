import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private themeKey: string = 'theme';

  constructor() {}

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
