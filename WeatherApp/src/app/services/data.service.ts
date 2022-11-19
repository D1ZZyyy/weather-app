import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private startPlace = new BehaviorSubject("Kraków");
  place = this.startPlace.asObservable();

setCity(city: string){
  this.startPlace.next(city)
  console.log("update: " + city)
}


  constructor() { }


}
