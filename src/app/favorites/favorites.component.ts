import { Component     , OnInit } from '@angular/core'
import { DataSets               } from '@constants/data-sets.enum'
import { Location               } from '@models/location-model'
import { WeatherService         } from '@services/weather.service'

@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.component.html',
  styleUrls: ['./favorites.component.scss']
})
export class FavoritesComponent implements OnInit {
  public favorites: Location[] = new Array();
  constructor(private weather: WeatherService) {
    this.favorites = this.weather
      .getContext(null, DataSets.Locations, (x: Location) => x.isFavorite);
  }
  ngOnInit() { }
}
