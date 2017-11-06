import { Injectable } from '@angular/core';
import { AngularFireDatabase } from "angularfire2/database";

@Injectable()

export class PlacesService {

	constructor(private afDB: AngularFireDatabase) {}

	public getPlaces() {
		return this.afDB.list('places/')
	}

	public findPlace(id) {
		return this.afDB.object(`places/${id}`);
	}

	public savePlace(place) {
		console.log(place)
		this.afDB.database.ref('places/' + place.id).set(place);
	}
}
