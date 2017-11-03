import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Mysquare';
  places: any = [
    { name: 'Panpaya', active: true, closeness: 1, distance: 1 },
    { name: 'Dolking Donuts', active: false, closeness: 1, distance: 1.8 },
    { name: 'Sopas de la Abuela', active: true, closeness: 1, distance: 1.5 },
    { name: 'Subway', active: false, closeness: 2, distance: 5 },
    { name: 'Cubano', active: true, closeness: 3, distance: 10 },
    { name: 'TG Fridays', active: true, closeness: 3, distance: 18 },
    { name: 'El Corral', active: false, closeness: 3, distance: 25 },
    { name: 'Mtr Lee', active: true, closeness: 3, distance: 35 },
    { name: 'Randys', active: true, closeness: 3, distance: 18 },
    { name: 'PPC', active: true, closeness: 3, distance: 23 },
    { name: 'kokorico', active: true, closeness: 3, distance: 50 },
    { name: 'Hornitos', active: false, closeness: 1, distance: .4 },
  ];
  lat: number = 4.6294303;
  lng: number = -74.092209;

  constructor() {}

}
