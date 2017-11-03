import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Mysquare';
  places: any = [
    { name: 'Panpaya', active: true },
    { name: 'Dolking Donuts', active: false },
    { name: 'Sopas de la Abuela', active: true },
    { name: 'Subway', active: true },
    { name: 'Cubano', active: true },
    { name: 'TG Fridays', active: true },
    { name: 'El Corral', active: false },
    { name: 'Mtr Lee', active: true },
    { name: 'Randys', active: true },
    { name: 'PPC', active: true },
    { name: 'kokorico', active: true },
    { name: 'Hornitos', active: false }
  ];

  constructor() {}

}
