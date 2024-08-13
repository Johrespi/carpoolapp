import { Component } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent ,IonButton,IonButtons,IonIcon,IonBadge,IonCard,IonCardTitle,IonThumbnail,IonCardHeader,IonGrid,IonRow,IonCol,IonLabel,IonList,IonItem,IonCardContent,IonText} from '@ionic/angular/standalone';
import { ExploreContainerComponent } from '../explore-container/explore-container.component';
import { RouterLink,Router } from '@angular/router';
import { addIcons } from 'ionicons';
import * as allIcons from 'ionicons/icons'
import { CarpoolData } from '../interfaces/carpool-data';
import { CameraResultType } from '@capacitor/camera';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
  standalone: true,
  imports: [IonHeader, IonToolbar, IonTitle, IonContent, ExploreContainerComponent,RouterLink,IonButton,IonButtons,IonIcon,IonBadge,IonCard,IonCardTitle,IonThumbnail,IonCardHeader,IonGrid,IonRow,IonCol,IonLabel,IonList,IonItem,IonCardContent,IonText]
})
export class Tab1Page {


  public carpools : CarpoolData[] = [
      {
        id: 1,
        name_owner: "Cristhian Santacruz",
        image_car: 'https://i.pinimg.com/564x/e4/ef/3f/e4ef3f9a7531d5ee6153794200e7a01f.jpg',
        price: 1.50,
        quotas : 4,
        model: 'Kia 2019 Blanco',
        destiny: ['Mucho Lote 2','Metropolis'],
        note: `Mañana salgo para la ESPOL para entrada de las 7:00am
              Paso por: 
              - Mucho lote 2
              - Metrópolis 2
              Precio: $1.50
              4 cupo disponible`,
        phone : '593994563180'
      },
      {
        id: 2,
        name_owner: "Johan Ramirez",
        image_car: 'https://i.pinimg.com/564x/c7/2f/4d/c72f4dcee3fa271ffbe5326fd1a4f70b.jpg',
        price: 1.50,
        model: 'Chevrolet Family ',
        quotas : 4,
        destiny: ['Sur','Chongon','Via la Costa','Mall del Sur'],
        note: `Mañana salgo para la ESPOL para entrada de las 7:00am
              Paso por: 
              - Sur
              - Chongon
              - Via la Costa
              - Mall del Sur
              Precio: $1.50
              4 cupo disponible`,
        phone : '593994563180'
      },
      {
        id: 3,
        name_owner: "Carlos Lopez",
        image_car: 'https://i.pinimg.com/564x/c7/2f/4d/c72f4dcee3fa271ffbe5326fd1a4f70b.jpg',
        price: 2,
        model: 'Toyota Corolla',
        quotas: 3,
        destiny: ['Centro', 'Norte', 'Kennedy', 'Plaza Lagos'],
        note: `Mañana salgo para la ESPOL para entrada de las 7:00am
              Paso por: 
              - Cento
              - Norte
              - Kennedy
              - Plaza Lagos
              Precio: $2.00
              4 cupo disponible`,
        phone : '593994563180'
      },
      {
        id: 4,
        name_owner: "Maria Fernandez",
        image_car: 'https://i.pinimg.com/564x/c7/2f/4d/c72f4dcee3fa271ffbe5326fd1a4f70b.jpg',
        price: 1.75,
        model: 'Honda Civic',
        quotas: 5,
        destiny: ['Sauces', 'Alborada', 'Urdesa', 'Mall del Sol'],
        note: `Mañana salgo para la ESPOL para entrada de las 7:00am
              Paso por: 
              - Sauces
              - Alborada
              - Urdesa
              - Mall del Sol
              Precio: $1.70
              4 cupo disponible`,
        phone : '593994563180'
      },
  ]


  constructor(private router : Router) {
    addIcons(allIcons)
  }

  navigateToLandingLogin(){
    this.router.navigate(['/landing-login']);
  }
}
