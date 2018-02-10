import { Component } from '@angular/core';
import { PlacesService } from "../services/places.service";
import { ActivatedRoute } from "@angular/router";
import { FormControl } from "@angular/forms";
import { Observable } from 'rxjs';
import 'rxjs/Rx';
import { HttpClient, HttpResponse, HttpParams } from "@angular/common/http";

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html'
})

export class CreateComponent {

  place: any = {};
  id: any = null;
  // string de observables
  results$: Observable<any>;
  // create input search controlable por typescript
  private searchField: FormControl;

  constructor(
    private placesService: PlacesService,
    private route: ActivatedRoute,
    private http: HttpClient
) {
    this.id = this.route.snapshot.params['id'];
    console.log(this.id);
    if (this.id !== 'new') {
      this.placesService.getPlace(this.id)
        .valueChanges()
        .subscribe(place => {
          this.place = place
        })
    }
    const URL = 'https://maps.google.com/maps/api/geocode/json';
    // this.searchField podra tener acceso a metodos que nos ayudem a detectar el evento de cambio de texto en el input
    this.searchField = new FormControl();
    /* asignando cada uno de los cambios del string, ademas utilizamos switchMap que es uno de los operadores que tiene
       Rx y permite hacer un mapeo pero al tiempo hacer un intercambio
    */
    this.results$ = this.searchField.valueChanges
      .debounceTime(500)
      .switchMap(query => this.http.get(`${URL}?address=${query}`))
      .map(response => response.results);

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
      }, error => {

      })
  }
}
