import { Component } from '@angular/core';
import { PlacesService } from "../services/places.service";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html'
})

export class CreateComponent {

  place: any = {};
  id: any = null;

  constructor(private placesService: PlacesService, private route: ActivatedRoute) {
    this.id = this.route.snapshot.params['id'];
    console.log(this.id);
    if (this.id !== 'new') {
      this.placesService.getPlace(this.id)
        .valueChanges()
        .subscribe(place => {
          this.place = place
        })
    }
  }

  savePlace() {
    var address = this.place.street + ',' + this.place.city + ',' + this.place.country
    this.placesService.getGeoData(address)
      .subscribe(result => {
        this.place.lat = result.json().results[0].geometry.location.lat;
        this.place.lng = result.json().results[0].geometry.location.lng;
        if (this.id !== 'new') {
          this.placesService.updatePlace(this.place);
        } else {
          this.place.id = Date.now()
          this.placesService.savePlace(this.place);
        }
        this.place = {}
      });
  }
}
