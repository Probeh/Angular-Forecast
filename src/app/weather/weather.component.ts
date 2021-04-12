import { Component     , OnInit } from '@angular/core'
import { ActivatedRoute         } from '@angular/router'
import { Location               } from '@models/location-model'
import { WeatherService         } from '@services/weather.service'

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.scss']
})
export class WeatherComponent implements OnInit {
  public location: Location;
  public dateString: Date | string;
  constructor(private weather: WeatherService, private route: ActivatedRoute) {
    this.route.data.subscribe({
      next: (result) => this.location = result['location']
    });
  }
  public toggleFavorite = () => {
    this.location.isFavorite = !this.location.isFavorite;
    this.weather.updateContext(this.location);
  }
  ngOnInit() { }
}
