import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
	selector: 'app-detail',
	templateUrl: './detail.component.html'
})

export class DetailComponent {

	places: any = [
		{ id: 1, name: 'Panpaya', active: true, closeness: 1, distance: 1, plain: 'free', description: 'Muy buen lugar para comer.' },
		{ id: 2, name: 'Dolking Donuts', active: false, closeness: 1, distance: 1.8, plain: 'free', description: 'La comida es excelente.' },
		{ id: 3, name: 'Sopas de la Abuela', active: true, closeness: 1, distance: 1.5, plain: 'free', description: 'Sopas por mejorar.' },
		{ id: 4, name: 'Subway', active: false, closeness: 2, distance: 5, plain: 'free', description: 'Buenos los pepinillos.' },
		{ id: 5, name: 'Cubano', active: true, closeness: 3, distance: 10, plain: 'free', description: 'Excelente salsa tartara.' },
		{ id: 6, name: 'TG Fridays', active: true, closeness: 3, distance: 18, plain: 'paid', description: 'Muy exclusivo lugar para comer.' },
		{ id: 7, name: 'El Corral', active: false, closeness: 3, distance: 25, plain: 'free', description: 'Las corralisimas lo mejor.' },
		{ id: 8, name: 'Mtr Lee', active: true, closeness: 3, distance: 35, plain: 'free', description: 'Restaurante favorito de los bogotanos,.' },
		{ id: 9, name: 'Randys', active: true, closeness: 3, distance: 18, plain: 'free', description: 'He probado mejores..' },
		{ id: 10, name: 'PPC', active: true, closeness: 3, distance: 23, plain: 'free', description: 'Muy buen ambiente.' },
		{ id: 11, name: 'kokorico', active: true, closeness: 3, distance: 50, plain: 'paid', description: 'Platos tipicos de Colombia.' },
		{ id: 12, name: 'Hornitos', active: false, closeness: 1, distance: .4, plain: 'free', description: 'Toda clase de pescados.' },
	];
	id = null;
	place: any = {};

	constructor(private route: ActivatedRoute) {
		console.log(this.route.snapshot.params['id'])
		console.log(this.route.queryParams)
		console.log(this.route.queryParams)
		console.log(this.route.snapshot.queryParams['action'])
		console.log(this.route.snapshot.queryParams['referer'])
		this.id = this.route.snapshot.params['id'];
		this.place = this.findPlace();
	}

	findPlace() {
		return this.places.find((place) => { return place.id == this.id}) || null;
	}

}
