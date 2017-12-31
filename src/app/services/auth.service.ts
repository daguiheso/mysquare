import { Injectable } from '@angular/core';
import { AngularFireDatabase } from "angularfire2/database";
import { Http } from "@angular/http";

@Injectable()

export class AuthService {

	constructor(private afDB: AngularFireDatabase, private http: Http) { }

	public login = (email,password) => {
		console.log('Método login')
	}

	public register = (email,password) => {
		console.log('Método register')
	}


}
