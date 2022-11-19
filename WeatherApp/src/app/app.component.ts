import { Component, OnInit } from '@angular/core';
import { WeatherService } from './services/weather.service';
import { weatherRoot } from './model/weather-model';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit  {

  weather?: weatherRoot;

  
  onSubmit(data: any){
      console.log(data)
  }

    
  constructor(private weatherService: WeatherService){

  }
  ngOnInit(): void {

    
  }
  title = 'WeatherApp';
}
