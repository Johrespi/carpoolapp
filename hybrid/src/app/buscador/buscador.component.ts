import { Component, OnInit } from '@angular/core';
import { searchOutline } from 'ionicons/icons';
import { addIcons } from 'ionicons';
import { IonIcon } from '@ionic/angular/standalone';

@Component({
  selector: 'app-buscador',
  templateUrl: './buscador.component.html',
  standalone: true,
  styleUrls: ['./buscador.component.scss'],
  imports: [IonIcon]
})
export class BuscadorComponent  implements OnInit {

  constructor() {
    addIcons({ searchOutline })
  }

  ngOnInit() {}

}
