import { Component, Input } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonButton, IonIcon, IonCard, IonCardTitle, IonThumbnail, IonCardHeader, IonCardContent, IonText } from '@ionic/angular/standalone';
import { CarpoolData } from '../interfaces/carpool-data';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-carpool-details',
  templateUrl: './carpool-details.component.html',
  styleUrls: ['./carpool-details.component.scss'],
  standalone: true,
  imports: [IonHeader, IonToolbar, IonTitle, IonContent, IonButton, IonIcon, IonCard, IonCardTitle, IonThumbnail, IonCardHeader, IonCardContent, IonText]
})
export class CarpoolDetailsComponent {
  @Input() carpool: CarpoolData = {
    id: 0,
    name_owner: '',
    image_car: '',
    price: 0,
    quotas: 0,
    model: '',
    destiny: [],
    note: '',
    phone: ''
  };

  constructor(private modalController: ModalController) {}

  closeOverlay() {
    
    this.modalController.dismiss();
    
  }
}
