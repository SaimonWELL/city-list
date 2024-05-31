import { Injectable } from '@angular/core';
import { City } from './city.model';

@Injectable({
  providedIn: 'root'
})
export class CityService {
  private cities: City[] = [
    { id: 1, name: 'Москва', description: 'Столица России, город федерального значения', imageUrl: 'https://screenshots.enkod.tech/ilya_novikovG6KIVEp3v160xCMY.png', isFavorite: false },
    { id: 2, name: 'Санкт-Петербург', description: 'Второй по численности населения город России', imageUrl: 'https://screenshots.enkod.tech/ilya_novikovW7s6gLwAGDjaJbNL.png', isFavorite: false },
    { id: 3, name: 'Новосибирск', description: 'Третий по численности населения город России', imageUrl: 'https://screenshots.enkod.tech/ilya_novikovHyQpb3vrjFvTfzJJ.png', isFavorite: false },
    { id: 4, name: 'Екатеринбург', description: 'Город-миллионник в России. Тоже красивый город', imageUrl: 'https://screenshots.enkod.tech/ilya_novikovvUvY8ocQ8yIQg6Gi.png', isFavorite: false },
    { id: 5, name: 'Нижний Новгород', description: 'Город в центральной России. Красивый город', imageUrl: 'https://screenshots.enkod.tech/ilya_novikovvjgSDr7xZl6A2UmH.png', isFavorite: false },
    { id: 6, name: 'Челябинск', description: 'Город в Российской Федерации, седьмой по количеству жителей', imageUrl: 'https://screenshots.enkod.tech/ilya_novikovc2dbr7KvIJ2dknlZ.png', isFavorite: false },
    { id: 7, name: 'Казань', description: 'Город в России, столица Республики Татарстан', imageUrl: 'https://screenshots.enkod.tech/ilya_novikovHWEuBOtzexaZ3VQs.png', isFavorite: false },
  ];

  private nextId = 8;

  getCities(): City[] {
    return this.cities;
  }

  addCity(city: City): void {
    city.id = this.nextId++;
    city.isFavorite = false;
    this.cities.push(city);
  }

  toggleFavorite(cityId: number): void {
    const city = this.cities.find(c => c.id === cityId);
    if (city) {
      city.isFavorite = !city.isFavorite;
    }
  }
}
