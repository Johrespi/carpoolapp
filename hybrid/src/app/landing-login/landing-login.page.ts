import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { IonContent, IonHeader, IonTitle, IonToolbar,IonImg ,IonButton,IonIcon,IonCard,IonCardContent} from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import * as allIcons from 'ionicons/icons';
import { BiometricService } from '../services/biometric.service';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-landing-login',
  templateUrl: './landing-login.page.html',
  styleUrls: ['./landing-login.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule,IonImg,IonButton,IonIcon,IonCard,IonCardContent]
})
export class LandingLoginPage implements OnInit {

  constructor(private router:Router,private biometricService:BiometricService) { 
    addIcons(allIcons)
  }

  ngOnInit() {
  }

  navigateToLogin(){
    this.router.navigate(['/login']);
  }

  navigateToPrincipalPage(){
    this.router.navigate(['/tabs/tab1']);
  }

  async authenticateWithBiometrics() {
    try {
      const result = await this.biometricService.verificarIdentidad();
      console.log(result)
      this.navigateToPrincipalPage(); 
    } catch (error) {
       Swal.fire({
        position : "top", 
        icon: 'error',
        heightAuto: false,
        showConfirmButton: false,
        timer : 500,    
      })
    }
  }

}
