import { Component, OnInit } from '@angular/core'
import { ActivatedRoute, Router } from '@angular/router'
import { Location } from '@models/location-model'

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.scss']
})
export class WeatherComponent implements OnInit {
  public location: Location;
  constructor(private router: Router, private route: ActivatedRoute) {
    this.route.data.subscribe({
      next: (result) => {
        this.location = result['location'];
      }
    });
  }
  ngOnInit() { }
}
