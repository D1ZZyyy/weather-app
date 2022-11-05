import { Component, OnInit } from '@angular/core';
import { WeatherService } from './services/weather.service';
import { weatherRoot } from './model/weather-model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit  {

  weather?: weatherRoot;

    
  constructor(private weatherService: WeatherService){

  }
  ngOnInit(): void {
    this.weatherService.getCoordinate('Kraków').subscribe({
      next: data => {
        console.log(data[0])
        this.weatherService.getWeather(data[0].lat, data[0].lon).subscribe({
          next: weatherData => {
            console.log(weatherData)
            this.weather = weatherData
          }
        })

      }
    });
    
  }
  title = 'WeatherApp';
}
