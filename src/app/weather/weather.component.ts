import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';
import {WeatherService } from '../weather.service';
import 'rxjs/add/operator/map';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})

export class WeatherComponent implements OnInit, OnDestroy {
  data: any[];
  subscription: Subscription;

  constructor(private _weatherService: WeatherService) { }

  ngOnInit() {
    this.subscription = this._weatherService.getWeather().subscribe(data => {
      this.data = data;
    });
  }

  ngOnDestroy() {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }
}
