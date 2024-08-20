import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { CarpoolData ,CarpoolDataReservation} from '../interfaces/carpool-data';
import {Subject} from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class CarpoolService {

  private reservationCountSubject = new Subject<number>();
  reservationCount$ = this.reservationCountSubject.asObservable();

  private count = 0;

  incrementCount() {
    this.count++;
    this.reservationCountSubject.next(this.count);
  }

  decrementCount() {
    this.count--;
    this.reservationCountSubject.next(this.count);
  }

  getCount(): number {
    return this.count;
  }
    
 

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
          phone : '593959568461'
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
          phone : '593959568461'
        },
        {
          id: 3,
          name_owner: "Carlos Lopez",
          image_car: 'https://i.pinimg.com/564x/c7/2f/4d/c72f4dcee3fa271ffbe5326fd1a4f70b.jpg',
          price: 2,
          model: 'Toyota Corolla',
          quotas: 2,
          destiny: ['Centro', 'Norte', 'Kennedy', 'Plaza Lagos'],
          note: `Mañana salgo para la ESPOL para entrada de las 7:00am
                Paso por: 
                - Cento
                - Norte
                - Kennedy
                - Plaza Lagos
                Precio: $2.00
                4 cupo disponible`,
          phone : '593959568461'
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

  public carpoolReservation : CarpoolDataReservation[] = []
 

  constructor() {}

  getCarpools(): CarpoolData[] {
    return this.carpools;
  }

  reservation(carpool:CarpoolData)  {

      const carpoolIndex  = this.carpools.findIndex(c=> c.id === carpool.id)

      if(carpool.quotas > 0 ){
          carpool.quotas--;
          this.carpools[carpoolIndex] = carpool;;
          this.carpoolReservation.push(this.carpoolDataToCarpoolDataReservation(carpool));
      }else {
         console.error("Carpool  not found")
      }
   
  }

  getReservationsCarpool(){
    return this.carpoolReservation;
  }

  deleteReservationById(id: number){
   
   const reservationToDelete = this.carpoolReservation.find(reservation => reservation.id === id);
   if (reservationToDelete) {
       this.carpoolReservation = this.carpoolReservation.filter(reservation => reservation.id !== id);
       this.carpools.forEach(carpool => {
           if (carpool.id === reservationToDelete.id) {
               carpool.quotas++;
           }
       });
   } else {
       console.error('Reserva no encontrada.');
   }
   
   
  
  }

  carpoolDataToCarpoolDataReservation(carpoolData:CarpoolData) : CarpoolDataReservation{
    return {
      id: carpoolData.id,
      name_owner: carpoolData.name_owner,
      image_car: carpoolData.image_car,
      phone: carpoolData.phone,
      dateCreation: new Date().toISOString().split('T')[0]
    }
  }



}
