import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonItem, IonButton, IonLabel, IonInput } from '@ionic/angular/standalone';
import { ProveedorService } from 'src/app/services/proveedor.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-actualizar-perfil',
  templateUrl: './actualizar-perfil.page.html',
  styleUrls: ['./actualizar-perfil.page.scss'],
  standalone: true,
  imports: [
    IonContent,
    IonHeader,
    IonTitle,
    IonToolbar,
    CommonModule,
    ReactiveFormsModule,
    IonItem,
    IonButton,
    IonLabel,
    IonInput
  ]
})
export class ActualizarPerfilPage implements OnInit {

  private activatedRoute = inject(ActivatedRoute);
  private proveedorService = inject(ProveedorService);
  private router = inject(Router);
  private fb = inject(FormBuilder);

  profileId: string = '';
  profileForm: FormGroup = this.fb.group({
    name: ['', [Validators.required]],
    email: ['', [Validators.required, Validators.email]],
    NombreEncargado: ['', [Validators.required]],
    CorreoNegocio: ['', [Validators.required]],
    DescripcionNegocio: ['', [Validators.required]],
    NumeroTelefono: ['', [Validators.required]],
    UbicacionNegocio: ['', [Validators.required]],
    UrlFacebook: [''],
    ImagenPerfil: [''],
    ImagenNegocio: ['']
  });

  constructor() { }

  ngOnInit() {
    this.profileId = this.activatedRoute.snapshot.paramMap.get('id')!;

    this.proveedorService.getProveedorById(this.profileId).subscribe(
      profileData => {
        if (profileData) {
          this.profileForm.patchValue(profileData);
        } else {
          this.router.navigate(['/home']);
        }
      },
      error => {
        console.error('Error al obtener el perfil', error);
        this.router.navigate(['/home']);
      }
    );
  }

  updateProfile() {
    if (this.profileForm.invalid) {
      return;
    }

    const updatedData = this.profileForm.value;

    this.proveedorService.updateProveedor(this.profileId, updatedData).subscribe(
      response => {
        console.log('Perfil actualizado', response);
        this.router.navigate(['/perfil']);
      },
      error => {
        console.error('Error al actualizar el perfil', error);
      }
    );
  }
}
