import { Injectable } from '@angular/core';
import firebase from 'firebase/compat/app';
import {Auth,signInWithEmailAndPassword,createUserWithEmailAndPassword,signOut } from '@angular/fire/auth';


@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

    constructor(private auth: Auth){}


    async register(email:string, password:string){
        return createUserWithEmailAndPassword(this.auth, email, password)
    }

    async login(email:string, password:string){
        return signInWithEmailAndPassword(this.auth, email, password)
    }

    async logout(){
        return signOut(this.auth)
    }

 
}