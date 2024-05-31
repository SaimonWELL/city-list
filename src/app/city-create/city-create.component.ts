import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { City } from '../city.model';
import { CityService } from '../city.service';
import {FormsModule} from "@angular/forms";

@Component({
  selector: 'app-city-create',
  standalone: true,
  imports: [
    FormsModule
  ],
  templateUrl: './city-create.component.html',
  styleUrl: './city-create.component.css'
})
export class CityCreateComponent {
  city: City = { id: 0, name: '', description: '', imageUrl: '', isFavorite: false };

  constructor(private cityService: CityService, private router: Router) { }

  onSubmit() {
    this.cityService.addCity(this.city);
    this.router.navigate(['/']);
  }

  onBack(){
    this.router.navigate(['/'])
  }
}
