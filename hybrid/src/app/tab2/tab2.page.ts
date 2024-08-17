import { Component, input,Input,OnInit } from '@angular/core';
import { ExploreContainerComponent } from '../explore-container/explore-container.component';

/* 1. Importe el módulo con la directiva @ngFor */
import { CommonModule } from '@angular/common'

/* 2. Importe los componentes de la UI */
import { IonHeader, IonToolbar, IonTitle, IonContent , IonFab, IonFabButton, IonIcon, IonImg, IonCol, IonRow, IonGrid, IonSegment, IonLabel, IonSegmentButton, IonItem,IonCard,IonCardContent,IonCardHeader, IonCardTitle, IonCardSubtitle ,IonAvatar,IonList, IonTabButton, IonButton } from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import * as allIcons from 'ionicons/icons'
import { Router } from '@angular/router';
import { CarpoolData, CarpoolDataReservation } from '../interfaces/carpool-data';
import { CarpoolService } from '../services/carpool.service';
import { ActionSheetController } from '@ionic/angular';
@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss'],
  standalone: true,
  imports: [IonButton, IonTabButton, IonCardSubtitle, IonCardTitle, IonItem, IonSegmentButton, IonLabel, IonSegment, CommonModule, IonFab, IonFabButton, IonIcon, IonImg, IonCol, IonRow, IonGrid, IonHeader, IonToolbar, IonTitle, IonContent, ExploreContainerComponent,IonCard,IonCardContent,IonCardHeader,IonAvatar,IonList ]
})

export class Tab2Page {

  public carpoolsReservations : CarpoolDataReservation[] = [];


  constructor(private router:Router,private carpoolService:CarpoolService,private actionSheetCtrl : ActionSheetController) {
    addIcons(allIcons)
    this.carpoolsReservations = this.carpoolService.getReservationsCarpool();
    
  }

  canDismiss = async (id:number) => {
    const actionSheet = await this.actionSheetCtrl.create({
      header: 'Estas Seguro de eliminar esta reserva?',
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
      this.deleteReservation(id)
    }

    return role === 'confirm';
  };


  deleteReservation(id:number){
    this.carpoolService.deleteReservationById(id);
    this.carpoolsReservations = this.carpoolService.getReservationsCarpool();
    
  }






}
