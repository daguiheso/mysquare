import { Component } from '@angular/core';
import { PlacesService } from "../services/places.service";
import { trigger, state, style, transition, animate } from '@angular/animations';

@Component({
	selector: 'app-places',
	templateUrl: './places.component.html',
	animations: [
		trigger('myAnimation', [
			state('initial', style({
				opacity: 0,
				background: 'peru',
				transform: 'rotate3d(0,0,0,0deg)'
			})),
			state('finish', style({
				opacity: 1,
				background: 'yellow',
				transform: 'rotate3d(5,10,20,30deg)'
			})),
			transition('initial => finish', animate(2500)),
			transition('finish => initial', animate(1000))
		])
	]
})

export class PlacesComponent {

	state = 'initial';
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

	animar() {
		this.state = (this.state === 'finish') ? 'initial' : 'finish';
	}

	animationStart(e) {
		console.log('Comenzado')
		console.log(e)
	}

	animationDone(e) {
		console.log('Terminado')
		console.log(e)
	}

}
