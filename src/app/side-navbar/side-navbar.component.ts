import { Component } from '@angular/core';
import { ThemeToggleComponent } from "../theme-toggle/theme-toggle.component";
import { IconComponent } from "../icon/icon.component";
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-side-navbar',
  standalone: true,
  imports: [ThemeToggleComponent, IconComponent, HttpClientModule,],
  templateUrl: './side-navbar.component.html',
  styleUrl: './side-navbar.component.css'
})
export class SideNavbarComponent {

}
