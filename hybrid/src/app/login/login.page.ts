import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { IonContent, IonHeader, IonTitle, IonToolbar ,IonItem,IonInput,IonIcon,IonInputPasswordToggle,IonButton,IonFab,IonFabButton} from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import * as allIcons from 'ionicons/icons';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule,IonItem,IonInput,IonIcon,IonInputPasswordToggle,IonButton,IonFab,IonFabButton]
})
export class LoginPage implements OnInit {

  constructor(private router:Router) { 
    addIcons(allIcons)
  }

  ngOnInit() {
  }

  navigateToHome() {
    this.router.navigate(['/tabs/tab1']);
  }

}
