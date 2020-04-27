import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { UserInfo } from 'firebase';


@Injectable({providedIn: 'root'})
export class AuthService {
    private userData : UserInfo;

    constructor(private fireAuth: AngularFireAuth) {}

    login(credentials: {email: string, password: string}) {
        return this.fireAuth.signInWithEmailAndPassword(credentials.email, credentials.password)
        .then(user=>this.userData = user.user);
    }

    get user() {
        return this.userData;
    }
}