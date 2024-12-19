import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SideNavbarComponent } from './side-navbar/side-navbar.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
      RouterOutlet, 
      SideNavbarComponent
    ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'Invoice-App';
}
