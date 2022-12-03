import { Injectable } from '@angular/core';
import { weatherRoot, List } from '../model/weather-model';
import { DataService } from './data.service';

@Injectable({
  providedIn: 'root'
})
export class HourlyWeatherService {
  
  weatherArray: List[][] = [];

  constructor(private dataService: DataService) { }
  
  reg = "/\d\d\d\d-\d\d-/19"
  today = new Date().getDate()
  getHourly(weather: weatherRoot){
      this.weatherArray[0] = []
      this.weatherArray[1] = []
      this.weatherArray[2] = []
      this.weatherArray[3] = []
      this.weatherArray[4] = []
      this.weatherArray[5] = []
    
      
     

      var reg = new RegExp("^[0-9][0-9][0-9][0-9]-[0-9][0-9]-[0-9]"+this.today % 10);
      console.log(this.today % 10)
      let j = 1
      let k = 0
      // if(weather.list[0].dt_txt)
      for(let i = 0; i <40; i++){
        if (k >= 8){
          j++
          k = 0
        }
        console.log(this.today)
        if(reg.test(weather.list[i].dt_txt)){
          console.log("if")
          this.weatherArray[0].push(weather.list[i])

          
        }else{
     
          this.weatherArray[j].push(weather.list[i])
          k++
          
        }
      }
      
      console.log(this.weatherArray)
      this.dataService.setWeather(this.weatherArray)
      
      




      
  }
}
