export interface CarpoolData{
    id: number;
    name_owner : string;
    image_car? : string;
    price : number;
    model : string;
    quotas : number;
    destiny : Array<string>
    note : string
    phone : string;
}


export interface CarpoolDataReservation {
    id : number;
    name_owner : string;
    image_car? : string;
    phone : string;
    dateCreation : string;
}