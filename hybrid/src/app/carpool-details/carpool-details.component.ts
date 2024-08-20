import { Component, Input } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonButton, IonIcon, IonCard, IonCardTitle, IonThumbnail, IonCardHeader, IonCardContent, IonText } from '@ionic/angular/standalone';
import { CarpoolData } from '../interfaces/carpool-data';
import { ModalController } from '@ionic/angular/standalone';
import { ActionSheetController } from '@ionic/angular/standalone';
import { CarpoolService } from '../services/carpool.service';
import { Tab1Page } from '../tab1/tab1.page';
import openChatWhatsAppCarpooolApp from '../utils/utils';
@Component({
  selector: 'app-carpool-details',
  templateUrl: './carpool-details.component.html',
  styleUrls: ['./carpool-details.component.scss'],
  standalone: true,
  imports: [IonHeader, IonToolbar, IonTitle, IonContent, IonButton, IonIcon, IonCard, IonCardTitle, IonThumbnail, IonCardHeader, IonCardContent, IonText],
  providers: [ModalController]
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

  @Input() parentPage!: Tab1Page;

  constructor(private modalController: ModalController,private actionSheetCtrl:ActionSheetController,private carpoolService : CarpoolService){}

  closeOverlay() {
    
    this.modalController.dismiss();
    
  }
  canDismiss = async () => {
    const actionSheet = await this.actionSheetCtrl.create({
      header: 'Estas Seguro?',
      buttons: [
        {
          text: 'Si',
          role: 'confirm',
        },
        {
          text: 'No',
          role: 'cancel',
        },
      ],
    });

    actionSheet.present();

    const { role } = await actionSheet.onWillDismiss();
    
    if(role === 'confirm'){
      this.reservation(this.carpool)
      
    }

    return role === 'confirm';
  };

  async reservation(carpool:CarpoolData){
    openChatWhatsAppCarpooolApp(carpool.phone, `Donde deseas que te recoja: `);
    this.carpoolService.reservation(this.carpool)
    this.carpoolService.incrementCount()
  }
  
}


