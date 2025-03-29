import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonItem, IonButton, IonLabel, IonInput, IonTextarea, IonIcon, IonFooter, IonButtons } from '@ionic/angular/standalone';
import { ProveedorService } from 'src/app/services/proveedor.service';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/api.service';
import { FooterNavComponent } from '../../components/footer-nav/footer-nav.component';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
  standalone: true,
  imports: [
    // IonButtons, IonFooter, IonIcon, 
    IonContent,
    IonHeader,
    // IonTitle, IonTextarea, 
    IonToolbar,
    CommonModule,
    ReactiveFormsModule,
    IonItem,
    IonButton,
    IonLabel,
    IonInput,
    FooterNavComponent,

  ]
})

export class RegisterPage implements OnInit {
  private proveedorService = inject(ProveedorService);
  // private userService = inject(ApiService);
  private router = inject(Router);
  private fb = inject(FormBuilder);

  registroForm: FormGroup = this.fb.group({
    Nombre: ['', Validators.required],
    Email: ['', [Validators.required, Validators.email]],
    Password: ['', [Validators.required, Validators.minLength(6)]],
    NumeroTelefono: ['', Validators.required],
    // UbicacionNegocio: [''],
    // DescripcionNegocio: [''], 
    ImagenPerfil: [''],
    ImagenNegocio: [''],
  });

  constructor() { }


  async registrar() {
    if (this.registroForm.invalid) {
      return;
    }
    try {
      const response = await this.proveedorService.crearProveedor(this.registroForm.value).toPromise();

      // const response = await this.userService.registerUser(this.registroForm.value).toPromise();
      console.log('Proveedor registrado exitosamente', response);
      this.router.navigate(['/login']);
    } catch (error) {



      console.error('Error en el registro:', error);
    }
  }
  ngOnInit() { }

  //   onFileSelected(event: any) {
  //     const file = event.target.files[0];
  //     if (file) {
  //       this.registroForm.patchValue({ ImagenPerfil: file });
  //     }
  //   }


  // Modificar el método onFileSelected para soportar ambos campos
  onFileSelected(event: any, field: string) {
    const file = event.target.files[0];
    if (file) {
      this.registroForm.patchValue({ [field]: file });
    }
  }

}
