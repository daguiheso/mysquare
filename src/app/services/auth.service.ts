import { Injectable } from '@angular/core';
import { AngularFireAuth } from "angularfire2/auth/auth";

@Injectable()

export class AuthService {

	constructor(private afAuth: AngularFireAuth) { }

	public login = (email, password) => {
		this.afAuth.auth.signInWithEmailAndPassword(email, password)
			.then(res => {
				alert('usuario logueado con exito');
				console.log(res);
			})
			.catch(error => {
				alert('usaurio no logueado');
				debugger
				console.log(error);
			})
	}

	public register = (email, password) => {
		this.afAuth.auth.createUserWithEmailAndPassword(email, password)
			.then(res => {
				alert('usuario registrado con exito');
				console.log(res);
			})
			.catch(error => {
				alert('usaurio no registrado');
				console.log(error);
			})
	}


}
