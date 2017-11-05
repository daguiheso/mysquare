import { Component } from '@angular/core';

@Component({
	selector: 'app-places',
	templateUrl: './places.component.html'
})

export class PlacesComponent {

	title = 'Mysquare';
	places: any = [
		{id: 1, name: 'Panpaya', active: true, closeness: 1, distance: 1, plain: 'free' },
		{id: 2, name: 'Dolking Donuts', active: false, closeness: 1, distance: 1.8, plain: 'free' },
		{id: 3, name: 'Sopas de la Abuela', active: true, closeness: 1, distance: 1.5, plain: 'free' },
		{id: 4, name: 'Subway', active: false, closeness: 2, distance: 5, plain: 'free' },
		{id: 5, name: 'Cubano', active: true, closeness: 3, distance: 10, plain: 'free' },
		{id: 6, name: 'TG Fridays', active: true, closeness: 3, distance: 18, plain: 'paid' },
		{id: 7, name: 'El Corral', active: false, closeness: 3, distance: 25, plain: 'free' },
		{id: 8, name: 'Mtr Lee', active: true, closeness: 3, distance: 35, plain: 'free' },
		{id: 9, name: 'Randys', active: true, closeness: 3, distance: 18, plain: 'free' },
		{id: 10, name: 'PPC', active: true, closeness: 3, distance: 23, plain: 'free' },
		{id: 11, name: 'kokorico', active: true, closeness: 3, distance: 50, plain: 'paid' },
		{id: 12, name: 'Hornitos', active: false, closeness: 1, distance: .4, plain: 'free' },
	];
	lat: number = 4.6294303;
	lng: number = -74.092209;

	constructor() { }

}
