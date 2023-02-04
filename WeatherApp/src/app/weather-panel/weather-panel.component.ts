import { Component, Input, OnInit } from '@angular/core';
import { List } from '../model/weather-model';


@Component({
  selector: 'app-weather-panel',
  templateUrl: './weather-panel.component.html',
  styleUrls: ['./weather-panel.component.css']
})
export class WeatherPanelComponent implements OnInit {

  @Input()
  pogoda!: List;


  currentdata!: string ;
  currentweather: List[][] = []
  date1!: string;
  weather!: string;
  main!: string;
  icon!: string;
  constructor() { }

  
  ngOnInit(): void {
    this.currentdata = this.pogoda.dt_txt
    this.date1= this.currentdata.split(" ")[1]
    this.weather = this.pogoda.weather[0].description
    this.main ="temperatura: "+ this.pogoda.main.temp+"°C, temperatura odczuwalna: "+this.pogoda.main.feels_like+"°C"
  }

  font(){
    return this.icon
  }

}
