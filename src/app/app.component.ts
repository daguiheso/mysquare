import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Mysquare';
  places: any = [
    { name: 'Panpaya', active: true, closeness: 1, distance: 1, plain: 'free' },
    { name: 'Dolking Donuts', active: false, closeness: 1, distance: 1.8, plain: 'free' },
    { name: 'Sopas de la Abuela', active: true, closeness: 1, distance: 1.5, plain: 'free' },
    { name: 'Subway', active: false, closeness: 2, distance: 5, plain: 'free' },
    { name: 'Cubano', active: true, closeness: 3, distance: 10, plain: 'free' },
    { name: 'TG Fridays', active: true, closeness: 3, distance: 18, plain: 'paid' },
    { name: 'El Corral', active: false, closeness: 3, distance: 25, plain: 'free' },
    { name: 'Mtr Lee', active: true, closeness: 3, distance: 35, plain: 'free' },
    { name: 'Randys', active: true, closeness: 3, distance: 18, plain: 'free' },
    { name: 'PPC', active: true, closeness: 3, distance: 23, plain: 'free' },
    { name: 'kokorico', active: true, closeness: 3, distance: 50, plain: 'paid' },
    { name: 'Hornitos', active: false, closeness: 1, distance: .4, plain: 'free' },
  ];
  lat: number = 4.6294303;
  lng: number = -74.092209;

  constructor() {}

}
