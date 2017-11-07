import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PlacesService } from "../services/places.service";

@Component({
	selector: 'app-detail',
	templateUrl: './detail.component.html'
})

export class DetailComponent {


	id = null;
	place: any = {};

	constructor(
		private route: ActivatedRoute,
		private placesService: PlacesService
	) {
		// console.log(this.route.snapshot.params['id'])
		// console.log(this.route.queryParams)
		// console.log(this.route.queryParams)
		// console.log(this.route.snapshot.queryParams['action'])
		// console.log(this.route.snapshot.queryParams['referer'])
		this.id = this.route.snapshot.params['id'];

		placesService.findPlace(this.id)
			.valueChanges()
			.subscribe(place => {
				this.place = place;
			});

	}

}
