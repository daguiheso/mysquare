import { Component } from '@angular/core';
import { PlacesService } from "../services/places.service";

@Component({
	selector: 'app-places',
	templateUrl: './places.component.html'
})

export class PlacesComponent {

	title = 'Mysquare';
	lat: number = 4.6294303;
	lng: number = -74.092209;
	places = null;

	constructor(private placesService: PlacesService) {
		placesService.getPlaces()
			.valueChanges()
			.subscribe(places => {
				this.places = places;
			})
	}

}
