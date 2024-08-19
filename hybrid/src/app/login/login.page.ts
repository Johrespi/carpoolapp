import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { IonContent, IonHeader, IonTitle, IonToolbar ,IonItem,IonInput,IonIcon,IonInputPasswordToggle,IonButton,IonFab,IonFabButton,IonFooter} from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import * as allIcons from 'ionicons/icons';
import { AuthenticationService } from '../services/authentication.service';
import { ReactiveFormsModule } from '@angular/forms';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule,IonItem,IonInput,IonIcon,IonInputPasswordToggle,IonButton,IonFab,IonFabButton,ReactiveFormsModule,IonFooter]
})
export class LoginPage implements OnInit {

  loginForm! : FormGroup

  constructor(private router:Router,private fb:FormBuilder,private authenticationService:AuthenticationService) {
    addIcons(allIcons)
  }

  
  ngOnInit() {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    });
  }

  async navigateToHome() {
    await  Swal.fire({
      position: "center",
      icon:"success",
      title : `Bienvenido`,
      showConfirmButton : false,
      timer : 1000,
      heightAuto: false

    })
    this.router.navigate(['/tabs/tab1']);
  }

  async loginInCarpoolApp(){
    if(this.loginForm.valid){
      const email = this.loginForm.value.email
      const password = this.loginForm.value.password
      await this.authenticationService.login(email,password)
      .then(()=>{
        this.loginForm.reset()
        this.navigateToHome()
      }).catch((error)=>{
        Swal.fire({
          position: "center",
          icon:"error",
          title : `Email o Contraseña Incorrecta`,
          showConfirmButton : false,
          timer : 1000,
          heightAuto: false
    
        })
       
      })
    }else{
      Swal.fire({
        position: "center",
        icon:"error",
        title : `Llene los campos`,
        showConfirmButton : false,
        timer : 1000,
        heightAuto: false
      })
    }
  }

  navigateToStart(){
    this.router.navigate(['/']);
  }

  navigateToRegister(){
    this.router.navigate(['/register']);
  }

}
