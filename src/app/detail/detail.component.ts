import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
	selector: 'app-detail',
	templateUrl: './detail.component.html'
})

export class DetailComponent {

	constructor(private route: ActivatedRoute) {
		console.log(this.route.snapshot.params['id'])
	}

}
