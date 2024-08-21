import { Injectable } from '@angular/core';
import { Plugins }  from  '@capacitor/core' ; 
import { NativeBiometric } from  'capacitor-native-biometric' 
import {Subject} from 'rxjs';
@Injectable({
  providedIn: 'root'
})

export class BiometricService{

    constructor(){}

   async verificarIdentidad(){
        try {
            const isAvailable = await NativeBiometric.isAvailable();
            if (isAvailable) {
              const result = await NativeBiometric.verifyIdentity({
                reason: 'Para iniciar sesion de manera sencilla',
                title: 'Inicia sesion',
                description: 'Por favor autenticate para inciar',
                maxAttempts: 3,
                useFallback: true,
              });
              return result;
        }
        } catch(error){
            console.error('Error verifying identity:', error);
            throw error;
        }
    }
}