import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonItem, IonButton, IonLabel, IonInput, IonText, IonCheckbox } from '@ionic/angular/standalone';
import { ProveedorService } from 'src/app/services/proveedor.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
  standalone: true,
  imports: [
    IonContent,
    // IonHeader,
    // IonTitle,
    // IonToolbar,
    // IonText ,
    CommonModule,
    ReactiveFormsModule,
    IonItem,
    IonButton,
    IonLabel,
    IonInput,

    IonCheckbox,

  ]
})
export class LoginPage implements OnInit {
  private proveedorService = inject(ProveedorService);
  private router = inject(Router);
  private fb = inject(FormBuilder);

  loginForm: FormGroup = this.fb.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required]]
  });

  errorMessage: string | null = null;  

  constructor() {}

  async login() {
    if (this.loginForm.invalid) {
      return;
    }
    
    try {
      const { email, password } = this.loginForm.value;
      const response = await this.proveedorService.login(email, password).toPromise();
      console.log('Login exitoso', response);

    
      localStorage.setItem('token', response.token);
      localStorage.setItem('profile', JSON.stringify(response.proveedor));

      this.router.navigate(['/home']); 
    } catch (error) {
      console.error('Error en el login:', error);

      this.errorMessage = 'Correo o contraseña incorrectos.';
    }
  }

  ngOnInit() {}
}
