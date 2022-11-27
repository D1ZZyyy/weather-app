import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';
import { List } from '../model/weather-model';
import { HourlyWeatherService } from './hourly-weather.service';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private startPlace = new BehaviorSubject("Kraków");
  place = this.startPlace.asObservable();

  private weatherData : BehaviorSubject<List[][]> = new BehaviorSubject<List[][]>([]);
  weatherGet = this.weatherData.asObservable()

setCity(city: string){
  this.startPlace.next(city)
  console.log("update: " + city)
}

setWeather(weather: List[][]){  
  this.weatherData.next(this.weatherData.value.concat(weather))
}


  constructor() { }


}
