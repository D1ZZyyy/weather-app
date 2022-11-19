import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SearchPageComponent } from './search-page/search-page.component';
import { WeatherPageComponent } from './weather-page/weather-page.component';

const routes: Routes = [
  {path: '', component: SearchPageComponent},
  {path: 'weather-page', component: WeatherPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
