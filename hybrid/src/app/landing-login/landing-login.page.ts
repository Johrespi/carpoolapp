import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { IonContent, IonHeader, IonTitle, IonToolbar,IonImg ,IonButton,IonIcon,IonCard,IonCardContent} from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import * as allIcons from 'ionicons/icons';
@Component({
  selector: 'app-landing-login',
  templateUrl: './landing-login.page.html',
  styleUrls: ['./landing-login.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule,IonImg,IonButton,IonIcon,IonCard,IonCardContent]
})
export class LandingLoginPage implements OnInit {

  constructor(private router:Router) { 
    addIcons(allIcons)
  }

  ngOnInit() {
  }

  navigateToLogin(){
    this.router.navigate(['/login']);
  }

}
