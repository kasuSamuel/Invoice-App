import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { IconComponent } from "../icon/icon.component";
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-calender',
  standalone: true,
  imports: [IconComponent, CommonModule],
  templateUrl: './calender.component.html',
  styleUrls: ['./calender.component.css']
})
export class CalenderComponent implements OnInit {
  @ViewChild('issueDateInput', { static: true }) input: ElementRef | undefined;
  @ViewChild('calendar', { static: true }) calendar: ElementRef | undefined;
  @ViewChild('calendarDays', { static: true }) calendarDays: ElementRef | undefined;
  @ViewChild('calendarTitle', { static: true }) calendarTitle: ElementRef | undefined;

  currentDate: Date = new Date();
  selectedDate: string = '';
  isCalendarHidden: boolean = true;

  constructor() {}

  ngOnInit(): void {
    this.renderCalendar();
  }

  renderCalendar(): void {
    const calendarDays = this.calendarDays?.nativeElement;
    if (!calendarDays) return;

    calendarDays.innerHTML = '';
    const year = this.currentDate.getFullYear();
    const month = this.currentDate.getMonth();
    
    // Update calendar title
    if (this.calendarTitle?.nativeElement) {
      this.calendarTitle.nativeElement.textContent = `${this.currentDate.toLocaleString('default', { month: 'long' })} ${year}`;
    }

    const firstDay = new Date(year, month, 1).getDay();
    const lastDate = new Date(year, month + 1, 0).getDate();

    // Fill empty days before the first day of the month
    for (let i = 0; i < firstDay; i++) {
      const emptyDay = document.createElement('span');
      calendarDays.appendChild(emptyDay);
    }

    // Add days of the current month
    for (let i = 1; i <= lastDate; i++) {
      const day = document.createElement('span');
      day.textContent = i.toString();
      day.classList.add('day');
      day.addEventListener('click', () => this.selectDay(i, year, month));
      calendarDays.appendChild(day);
    }
  }

  selectDay(day: number, year: number, month: number): void {
    this.selectedDate = `${day} ${this.currentDate.toLocaleString('default', { month: 'short' })} ${year}`;

    // Set the input value
    if (this.input?.nativeElement) {
      this.input.nativeElement.value = this.selectedDate;
    }

    // Close the calendar
    this.isCalendarHidden = true;
  }

  toggleCalendar(): void {
    this.isCalendarHidden = !this.isCalendarHidden;
    this.renderCalendar();
  }

  previousMonth(): void {
    this.currentDate.setMonth(this.currentDate.getMonth() - 1);
    this.renderCalendar();
  }

  nextMonth(): void {
    this.currentDate.setMonth(this.currentDate.getMonth() + 1);
    this.renderCalendar();
  }

  closeCalendar(event: MouseEvent): void {
    const target = event.target as HTMLElement;
    if (!target.closest('.date-picker-container') && this.calendar?.nativeElement) {
      this.isCalendarHidden = true;
    }
  }
}
