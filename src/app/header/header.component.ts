import { DataService } from './../shared/data.service';
import { Component, OnInit } from '@angular/core';
import { IconComponent } from "../icon/icon.component";
import { HeadlineComponent } from "../headline/headline.component";

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [IconComponent, HeadlineComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent implements OnInit {
  constructor(private dataService: DataService) {}

  ngOnInit(): void {
    this.dataService.initTheme();
  }
}
