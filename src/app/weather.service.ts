import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable()
export class WeatherService {

  constructor(private http: HttpClient) {
  }

  getWeather(): Observable<any> {
    const url = 'http://api.wunderground.com/api/83e8c2eba2c4b5d3/conditions/q/CA/Asheville.json';
    return this.http.get<any>(url);
  }
}
