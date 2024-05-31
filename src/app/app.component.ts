import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {CityListComponent} from "./city-list/city-list.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CityListComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'city-list';
}
