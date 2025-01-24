import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { DataService } from '../shared/data.service';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-headline',
  templateUrl: './headline.component.html',
  styleUrls: ['./headline.component.css'],
  standalone: true,
  imports: [CommonModule,HttpClientModule,],})
export class HeadlineComponent  implements OnInit  {
  @Input() level: number = 1;  
  @Input() text: string = '';  
  @Input() number: number = 0;  
  @Input() className: string = ''; 


    constructor(private dataService: DataService) {}
  
    ngOnInit(): void {
      this.dataService.initTheme();
    }
}
