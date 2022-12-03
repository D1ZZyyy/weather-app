import { Component, Input, OnInit } from '@angular/core';
import { List, weatherRoot } from '../model/weather-model';
import { HourlyWeatherService } from '../services/hourly-weather.service';
import { DataService } from '../services/data.service';
import {MatIconModule} from '@angular/material/icon';

@Component({
  selector: 'app-weather-panel',
  templateUrl: './weather-panel.component.html',
  styleUrls: ['./weather-panel.component.css']
})
export class WeatherPanelComponent implements OnInit {

  @Input()
  pogoda!: List;


  // weatherDate: string = this.pogoda.dt_txt;
  currentdata!: string ;
  currentweather: List[][] = []
  date1!: string;
  weather!: string;
  main!: string;
  constructor(private data: DataService) { }

  ngOnInit(): void {
    this.currentdata = this.pogoda.dt_txt
    this.date1= this.currentdata.split(" ")[1]
    this.weather = this.pogoda.weather[0].description

    this.main ="temperatura: "+ this.pogoda.main.temp+"°C, temperatura odczuwalna: "+this.pogoda.main.feels_like+"°C"
  }




}
