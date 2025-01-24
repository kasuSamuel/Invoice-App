import { Component, OnInit } from '@angular/core';
import { IconComponent } from "../icon/icon.component";
import { CommonModule } from '@angular/common';
import { DataService } from '../shared/data.service';
import { HttpClientModule } from '@angular/common/http';


@Component({
  selector: 'app-theme-toggle',
  templateUrl: './theme-toggle.component.html',
  styleUrls: ['./theme-toggle.component.css'],
  standalone: true,
  imports: [IconComponent, CommonModule,HttpClientModule,],
})
export class ThemeToggleComponent implements OnInit {
  isDarkMode: boolean = false;

  constructor(private dataService: DataService) {}


  ngOnInit(): void {
    this.isDarkMode = this.dataService.getTheme() === 'dark';
    

  }

  toggleTheme(): void {
    this.isDarkMode = !this.isDarkMode;
    const newTheme = this.isDarkMode ? 'dark' : 'light';
    this.dataService.setTheme(newTheme);
  }
}