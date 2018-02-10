import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';

@Component({
	selector: 'app-login',
	templateUrl: './login.component.html'
})
export class LoginComponent implements OnInit {

	loginData: any = {};

	constructor(private authService: AuthService) { }

	login() {
		this.authService.login(this.loginData.email, this.loginData.password);
	}

	ngOnInit() {
	}

}
