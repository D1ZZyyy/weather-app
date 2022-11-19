import { TestBed } from '@angular/core/testing';

import { HourlyWeatherService } from './hourly-weather.service';

describe('HourlyWeatherService', () => {
  let service: HourlyWeatherService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HourlyWeatherService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
