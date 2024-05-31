import {Component, OnInit} from '@angular/core';
import {City} from "../city.model";
import {NgForOf, NgIf, NgOptimizedImage} from "@angular/common";
import {CityService} from "../city.service";
import {RouterLink} from "@angular/router";

@Component({
  selector: 'app-city-list',
  standalone: true,
  imports: [
    NgForOf,
    NgOptimizedImage,
    NgIf,
    RouterLink
  ],
  templateUrl: './city-list.component.html',
  styleUrl: './city-list.component.css'
})
export class CityListComponent implements OnInit {
  cities: City[] = [];
  viewMode: 'list' | 'tile' = 'list';

  constructor(private cityService: CityService) { }

  ngOnInit() {
    this.cities = this.cityService.getCities();
  }

  toggleViewMode(mode: 'list' | 'tile') {
    this.viewMode = mode;
  }
  toggleFavorite(cityId: number): void {
    this.cityService.toggleFavorite(cityId);
  }
}
