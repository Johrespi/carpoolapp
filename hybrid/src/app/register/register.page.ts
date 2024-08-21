import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar ,IonItem,IonInput,IonIcon,IonInputPasswordToggle,IonButton,IonFab,IonFabButton} from '@ionic/angular/standalone';
import { Router } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { addIcons } from 'ionicons';
import * as allIcons from 'ionicons/icons';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthenticationService } from '../services/authentication.service';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule,IonItem,IonInput,IonIcon,IonInputPasswordToggle,IonButton,IonFab,IonFabButton, ReactiveFormsModule]
})

export class RegisterPage implements OnInit {
  registerForm!: FormGroup;

  constructor(private router: Router, private fb: FormBuilder,private authenticationService: AuthenticationService) {
    addIcons(allIcons);
  }

  ngOnInit() {
    this.registerForm = this.fb.group({
      username: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
      confirmPassword: ['', Validators.required]
    });
  }

  navigateToLogin(){
    this.router.navigate(['/login']);
  }

  async onRegister() {
    if (this.registerForm.valid) {
      const email = this.registerForm.value.email;
      const password = this.registerForm.value.password;
      const confirmPassword = this.registerForm.value.confirmPassword;
      if(password !== confirmPassword) {
       
        Swal.fire({
          position : "bottom", 
          icon: 'error',
          text: 'Las contraseñas no coinciden',
          heightAuto: false,
          showConfirmButton: true,    
        });
        this.registerForm.patchValue({
          password: '',
          confirmPassword: ''
        });
        return;
      }
      await this.authenticationService.register(email, password)
      .then(() => {
         Swal.fire({
          position : "bottom", 
          icon: 'success',
          text: 'Registro exitoso',
          heightAuto: false,
          showConfirmButton: false,
          timer:1000    
        });
        this.registerForm.reset();
        this.router.navigate(['/login']);
      }).catch((error) => {
        
        // error Passwood
        // error email en uso
        const message = error.message;
        const condPassword = message.includes('auth/weak-password')
        const condEmail = message.includes('auth/email-already-in-use');

        if(condPassword){
          Swal.fire({
            position : "bottom", 
            icon: 'error',
            text: 'Contraseña muy débil, debe tener al menos 6 caracteres ',
            heightAuto: false,
            showConfirmButton: true,    
          });
        }
        if(condEmail){
          Swal.fire({
            position : "bottom", 
            icon: 'error',
            text: 'El correo electrónico ya está en uso.',
            heightAuto: false,
            showConfirmButton: true,    
          });
        }
        if(condPassword==false && condEmail==false){
          Swal.fire({
            position : "bottom", 
            icon: 'error',
            text: 'Ocurrio un error en el registro',
            heightAuto: false,
            showConfirmButton: true,    
          });
        }

        console.error(error);
      });
    }
  }
}
