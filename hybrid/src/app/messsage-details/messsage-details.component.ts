import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {ModalController} from '@ionic/angular';
import { IonHeader, IonToolbar, IonTitle, IonContent ,IonButton,IonButtons,IonItem,IonInput, IonTextarea, IonText, IonTabButton, IonIcon } from '@ionic/angular/standalone';
import { ActionSheetController } from '@ionic/angular';
@Component({
  selector: 'app-messsage-details',
  templateUrl: './messsage-details.component.html',
  styleUrls: ['./messsage-details.component.scss'],
  standalone: true,
  imports: [IonIcon, IonTabButton, IonText, IonTextarea, IonHeader, IonToolbar, IonContent,IonTitle,IonButton, IonButtons,IonItem,IonInput,FormsModule,FormsModule]
})
export class MesssageDetailsComponent  implements OnInit {

  public message: string = '';

  constructor(private modalController : ModalController,private actionSheetCtrl:ActionSheetController) { }

  customCounterFormatter(inputLength: number, maxLength: number) {
    return `${maxLength - inputLength} characters remaining`;
  }
  ngOnInit() {}

  cancel() {
    return this.modalController.dismiss(null,'cancel')
  }

  confirm(){
    return this.modalController.dismiss(this.message,'confirm')
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
    
    if(role !== 'confirm'){
      return this.modalController.dismiss(null,'cancel')
    }

    return this.modalController.dismiss(this.message,'confirm')
  };
}


