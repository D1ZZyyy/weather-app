import { Component, ComponentFactory, ComponentFactoryResolver, ComponentRef, OnInit, QueryList, ViewChild, ViewChildren, ViewContainerRef } from '@angular/core';
import { DataService } from '../services/data.service';
import { WeatherService } from '../services/weather.service';
import { List, weatherRoot } from '../model/weather-model';
import { HourlyWeatherService } from '../services/hourly-weather.service';
import { WeatherPanelComponent } from '../weather-panel/weather-panel.component';


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
  week: string[] = ["Niedziela", "Poniedziałek", "Wtorek", "Środa", "Czwartek", "Piątek", "Sobota"]
  currentdata: string[] = []
  currentweather: List[][] = []
  month = new Date().getMonth()
  daysInMonth= new Date(2022, this.month+1, 0).getDate()
  aaa = "aaaafsdfsdaa"
  nextWeather: number = 0
  @ViewChild("pogoda", {read: ViewContainerRef, static: true})
  pogoda!: ViewContainerRef

  @ViewChildren("pogoda", {read: ViewContainerRef})
  inputs!: QueryList<ViewContainerRef>
  
  createComponent(current: List[], element: number){
    // console.log(current)
    // this.pogoda.createComponent(WeatherPanelComponent).setInput("pogoda", current)
      this.inputs.toArray()[element].createComponent(WeatherPanelComponent).setInput("pogoda", current[this.nextWeather])
    // this.inputs.forEach((ref: ViewContainerRef, index:number)=>
    // {ref.createComponent(WeatherPanelComponent).setInput("pogoda", current)
    // console.log("index")})
    console.log(this.inputs.toArray()[element])
    console.log(current[this.nextWeather].dt_txt)
    this.nextWeather++
  }



  ngOnInit(): void {
   
    


    
    this.data.place.subscribe({next: city =>{
      console.log(city)
      
      
      
      this.weatherService.getCoordinate(city).subscribe({
        next: data => {
          console.log(data)
          this.weatherService.getWeather(data[0].lat, data[0].lon,).subscribe({
            next: weatherData => {
            
              this.hourlyService.getHourly(weatherData)
              this.weather = weatherData
              console.log(this.weekday)
              let a = 0
              for(let i =0; i<6; i++){
                  if(this.today+i > this.daysInMonth){
                 
                      this.today =1-i
                  }
                if(this.weekday+i >= 8 || this.weekday==0){
                  
                  this.currentdata[i] = this.week[a]+", "+(this.today+i)
    
                  a++
                }else{
                  
                this.currentdata[i] = this.week[this.weekday+i-1]+", "+(this.today+i)
                console.log(this.currentdata[i])
                }
              }
              console.log(this.currentdata)
              
            }
          })
  
        }
      });
    
    }
      
      
      
      
    })
      


    this.data.weatherGet.subscribe({
      next: arr =>{
        
        this.currentweather = arr
    
       
        if(this.currentweather.length > 0){
          for(let i = 0; i < 6; i++){
            this.nextWeather = 0
            for(let j = 0; j < this.currentweather[i].length; j++){
              this.createComponent(this.currentweather[i], i)
              
          }
          }

          console.log("lista zapełniona")
          
        }
        
        
      }
  
      
    })


    // this.createComponent(this.currentweather)


    
  }





}
