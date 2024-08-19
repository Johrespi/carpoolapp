import { Component, Inject } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent ,IonButton,IonButtons,IonIcon,IonBadge,IonCard,IonCardTitle,IonThumbnail,IonCardHeader,IonGrid,IonRow,IonCol,IonLabel,IonList,IonItem,IonCardContent,IonText,IonSearchbar} from '@ionic/angular/standalone';
import { ExploreContainerComponent } from '../explore-container/explore-container.component';
import { RouterLink,Router } from '@angular/router';
import { addIcons } from 'ionicons';
import * as allIcons from 'ionicons/icons'
import { CarpoolData } from '../interfaces/carpool-data';
import { CameraResultType } from '@capacitor/camera';
import { CarpoolDetailsComponent } from '../carpool-details/carpool-details.component';
 import { ModalController } from '@ionic/angular/standalone';
import { IonicModule } from '@ionic/angular';
import { NavigationExtras } from '@angular/router';
import { CarpoolService } from '../services/carpool.service';
import { MesssageDetailsComponent } from '../messsage-details/messsage-details.component';
import { NgIf } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { buscarPorDestinos } from 'src/util/buscador';
import { AuthenticationService } from '../services/authentication.service';
@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
  standalone: true,
  imports: [IonicModule, ExploreContainerComponent,RouterLink,IonCard,IonCardTitle,IonThumbnail,IonCardHeader,IonGrid,IonCol,IonLabel,IonList,IonCardContent,IonText, NgIf, FormsModule,FormsModule],
  providers: [ModalController,IonSearchbar]
})
export class Tab1Page {
  
  public  mensajeUsuario :string='';
  public  countReservations : number = 0;
  public carpools : CarpoolData[] = []
  public openSearchBar: boolean = false
  public searchTerm: string = ''


  constructor(private router : Router, private modalController: ModalController,private carpoolService : CarpoolService,private authService:AuthenticationService) {
    this.carpools = this.carpoolService.getCarpools();
    addIcons(allIcons)
  }

  logoutUserInCarpoolApp(){
    this.authService.logout().then(()=>{
      this.router.navigate(['/login'])
    }).catch((err)=>{
      console.log(err)
    })
    
  }


  async openCarpoolDetails(carpool: CarpoolData) {
    const modal = await this.modalController.create({
      component: CarpoolDetailsComponent,
      componentProps: { carpool ,parentPage : this }
    });
    return await modal.present();
  }
  

  public reservarCarpool(carpool: CarpoolData,message:string){
      this.openChatWhatsAppCarpooolApp(carpool.phone,message)
      this.carpoolService.reservation(carpool)
      this.countReservations = this.carpoolService.getReservationsCarpool().length;
  }

  async openMessageModal(carpool:CarpoolData){
    const modal = await this.modalController.create({
      component: MesssageDetailsComponent,
    });
    modal.present();

    const { data, role } = await modal.onWillDismiss();

    if (role === 'confirm') {
      this.mensajeUsuario = data;
      this.reservarCarpool(carpool,data)      
    }

    if(role == 'cancel'){
      console.log("Hello cancel")
    }


  }

  openChatWhatsAppCarpooolApp(phoneNumber: string,message: string){
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  }


  incrementReservationsToday(){
    this.countReservations++;
  }

  setOpenSearchBar(value: boolean) {
    this.openSearchBar = value
  }

  onSearch() {
    this.carpools = buscarPorDestinos(this.searchTerm, this.carpoolService.getCarpools())
  }

  removerBuscador() {
    this.setOpenSearchBar(false)
    this.carpools = this.carpoolService.getCarpools()
  }
}
