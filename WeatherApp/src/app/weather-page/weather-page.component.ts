import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';
import { WeatherService } from '../services/weather.service';
import { weatherRoot } from '../model/weather-model';
import { HourlyWeatherService } from '../services/hourly-weather.service';


@Component({
  selector: 'app-weather-page',
  templateUrl: './weather-page.component.html',
  styleUrls: ['./weather-page.component.css']
})
export class WeatherPageComponent implements OnInit {

  constructor(private weatherService: WeatherService, private data: DataService, private hourlyService: HourlyWeatherService) { }

  weather?: weatherRoot;
  weekday = new Date().getDay() 
  today = new Date().getDate() 
  week: string[] = ["Poniedziałek", "Wtorek", "Środa", "Czwartek", "Piątek", "Sobota", "Niedziela"]
  currentdata: string[] = []


  ngOnInit(): void {
    console.log("działa")
    this.data.place.subscribe({next: city =>{
      console.log(city)
      
      
      this.weatherService.getCoordinate(city).subscribe({
        next: data => {
          console.log(data)
          this.weatherService.getWeather(data[0].lat, data[0].lon,).subscribe({
            next: weatherData => {
            
              this.hourlyService.getHourly(weatherData)
              this.weather = weatherData
           
              let a = 0
              for(let i =0; i<6; i++){
 
                if(this.weekday+i >= 8){
                  
                  this.currentdata[i] = this.week[a]+", "+(this.today+i)
    
                  a++
                }else{
                  
                this.currentdata[i] = this.week[this.weekday+i-1]+", "+(this.today+i)
                }
              }
              
            }
          })
  
        }
      });
    
    }
      
      
      
      
    })
      





    
  }

}
