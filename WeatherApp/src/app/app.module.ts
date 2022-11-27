import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {MatIconModule} from '@angular/material/icon'
import {MatTabsModule} from '@angular/material/tabs';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { WeatherPageComponent } from './weather-page/weather-page.component';
import { SearchPageComponent } from './search-page/search-page.component';
import {MatExpansionModule} from '@angular/material/expansion';
import { WeatherPanelComponent } from './weather-panel/weather-panel.component';

@NgModule({
  declarations: [
    AppComponent,
    WeatherPageComponent,
    SearchPageComponent,
    WeatherPanelComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatIconModule,
    MatTabsModule,
    HttpClientModule,
    FormsModule,
    MatExpansionModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
