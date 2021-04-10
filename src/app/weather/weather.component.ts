import { Component, OnInit } from '@angular/core'
import { ActivatedRoute, Router } from '@angular/router'
import { Location } from '@models/location-model'

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.scss']
})
export class WeatherComponent implements OnInit {
  constructor(private router: Router, private route: ActivatedRoute) {
    this.route.queryParamMap.subscribe({
      next: params => {
        console.log(params);
      }
    });
    this.route.data.subscribe({
      next: (data: { location: Location }) => {
        console.log(data);
      }
    });
  }
  ngOnInit() { }
}
