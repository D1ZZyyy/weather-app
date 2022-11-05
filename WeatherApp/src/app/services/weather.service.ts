import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { from, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import {geocoding} from '../model/geocoding';
import {weatherRoot} from '../model/weather-model'

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  constructor(private http: HttpClient) { }
  getCoordinate(city:string): Observable<geocoding>{
   return this.http.get<geocoding>(environment.coordinatesAPIUrl,{
      params: new HttpParams()
      .set('q', city)
      .set('appid', environment.weatherAPIKey)
    })
  }


  getWeather(latitude: number, longitude: number): Observable<weatherRoot>{
    return this.http.get<weatherRoot>(environment.weatherAPIUrl, {
      params: new HttpParams()
      .set('lat', latitude)
      .set('lon', longitude)
      .set('appid', environment.weatherAPIKey)
      .set('lang', environment.weatherAPILanguage)
    })
  }
}
