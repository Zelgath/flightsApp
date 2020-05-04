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

    register(credentials: {email: string, password: string}) {
        return this.fireAuth.createUserWithEmailAndPassword(credentials.email, credentials.password);
        
    }

    logout() {
        return this.fireAuth.signOut();
    }

    isLoggedIn() {
        return !!this.userData;
    }

    get user() {
        return this.userData;
    }
}