import { Component } from '@angular/core';
import {    IonCard, IonCardHeader, IonCardSubtitle, IonCardTitle, IonCardContent,IonHeader, IonToolbar, IonTitle, IonContent,IonFab,IonFabButton,IonIcon } from '@ionic/angular/standalone';
import { ExploreContainerComponent } from '../explore-container/explore-container.component';
import { addIcons } from 'ionicons';
import * as allIcons from 'ionicons/icons';
@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss'],
  standalone: true,
  imports: [IonHeader, IonToolbar, IonTitle, IonContent, ExploreContainerComponent,  IonCard, IonCardHeader, IonCardSubtitle, IonCardTitle, IonCardContent,IonIcon,IonFab,IonFabButton],
})
export class Tab3Page {
  constructor() { 
    addIcons(allIcons)
  }


  openChatWhatsAppSupportCarpooolApp(){
    const phoneNumber : string = '593994563180';
    const message = "";
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  }
}
