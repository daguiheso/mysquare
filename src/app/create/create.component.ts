import { Component, OnInit } from '@angular/core';
import { PlacesService } from "../services/places.service";

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html'
})

export class CreateComponent {

  place: any = {};

  constructor(private placesService: PlacesService) {}

  savePlace() {
    var address = this.place.street + ',' + this.place.city + ',' + this.place.country
    this.placesService.getGeoData(address)
      .subscribe(result => {
        this.place.lat = result.json().results[0].geometry.location.lat;
        this.place.lng = result.json().results[0].geometry.location.lng;
        this.place.id = Date.now()
        this.placesService.savePlace(this.place);
        this.place = {}
      });
  }
}
