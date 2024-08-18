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

  onRegister() {
    if (this.registerForm.valid) {
      const email = this.registerForm.value.email;
      const password = this.registerForm.value.password;
      this.authenticationService.register(email, password)
      .then(() => {
        this.router.navigate(['/login']);
      }).catch((error) => {
        console.error(error);
      });
    }
  }
}
