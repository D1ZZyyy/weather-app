import { Component, OnInit } from '@angular/core';
import { WeatherService } from '../services/weather.service';
import { weatherRoot } from '../model/weather-model';
import { NgForm } from '@angular/forms';
import { DataService } from '../services/data.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-search-page',
  templateUrl: './search-page.component.html',
  styleUrls: ['./search-page.component.css']
})
export class SearchPageComponent implements OnInit {

  weather?: weatherRoot;

  

  

    
  constructor(private weatherService: WeatherService, private dataService: DataService, private router: Router){

  }

  onSubmit(city: any){
    console.log(city)
    this.dataService.setCity(city.place)
    this.router.navigate(["/weather-page"])

}
  ngOnInit(): void {

    
  }
  title = 'WeatherApp';

}
