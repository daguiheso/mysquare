import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';

@Component({
	selector: 'app-register',
	templateUrl: './register.component.html'
})

export class RegisterComponent implements OnInit {

	registerData: any = {};

	constructor(private authService: AuthService) { }

	register() {
		this.authService.register(this.registerData.email, this.registerData.password);
	}

	ngOnInit() {
	}

}
