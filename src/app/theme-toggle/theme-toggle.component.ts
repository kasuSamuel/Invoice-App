import { Component, OnInit } from '@angular/core';
import { IconComponent } from "../icon/icon.component";
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-theme-toggle',
  templateUrl: './theme-toggle.component.html',
  styleUrls: ['./theme-toggle.component.css'],
  standalone: true,
  imports: [IconComponent, CommonModule],
})
export class ThemeToggleComponent implements OnInit {
  isDarkMode: boolean = false;

  constructor() {}

  ngOnInit(): void {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
      this.isDarkMode = true;
      document.body.setAttribute('data-theme', 'dark');
    } else {
      this.isDarkMode = false;
      document.body.removeAttribute('data-theme');
    }
  }

  toggleTheme(): void {
    if (this.isDarkMode) {
      // Switch to light mode
      document.body.removeAttribute('data-theme');
      localStorage.setItem('theme', 'light');
    } else {
      // Switch to dark mode
      document.body.setAttribute('data-theme', 'dark');
      localStorage.setItem('theme', 'dark');
    }

    // Toggle the boolean flag
    this.isDarkMode = !this.isDarkMode;
  }
}
