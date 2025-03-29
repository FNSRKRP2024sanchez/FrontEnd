import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonButton, IonItem, IonLabel, IonIcon, IonSearchbar, IonThumbnail, IonButtons } from '@ionic/angular/standalone';
import { Router } from '@angular/router';
import { ProveedorService } from 'src/app/services/proveedor.service';  // Importamos el servicio
import { ProductCardComponent } from 'src/app/components/product-card/product-card.component';
import { addIcons } from 'ionicons';
import { heart, home, star, options, person, people, addCircle, help } from 'ionicons/icons';
import { FooterNavComponent } from '../../components/footer-nav/footer-nav.component';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.page.html',
  styleUrls: ['./perfil.page.scss'],
  standalone: true,
  imports: [
    // IonButtons, 
    IonSearchbar, IonIcon, IonContent, IonHeader, 
    FooterNavComponent,
    // IonTitle, 
    IonToolbar, CommonModule, FormsModule, IonTitle, IonButton]
})
export class PerfilPage implements OnInit {
  productos: any[] = [];
  proveedorId: string = '';  
  profile: any = {}; 

  private router = inject(Router);
  private proveedorService = inject(ProveedorService);  

  constructor() { addIcons({ heart, home, star, options, person, people, addCircle, help}); }

  buscarUbicacion() {
    // Implementar lógica de búsqueda de ubicación
    console.log('Buscar ubicación');
  }

  // ngOnInit(): void {
    
  //   const profileData = this.proveedorService.getProfile();
  //   if (profileData && profileData._id) {
  //     this.proveedorService.getProveedorById(profileData._id).subscribe(
  //       (data) => {
  //         this.profile = data;
  //       },
  //       (error) => {
  //         console.error('Error al obtener el perfil:', error);
  //         this.router.navigate(['/login']); 
  //       }
  //     );
  //   } else {
    
  //     this.router.navigate(['/login']);
  //   }
  // }




  ngOnInit(): void {
    const profileData = this.proveedorService.getProfile();
    if (profileData && profileData._id) {
      this.proveedorService.getProveedorById(profileData._id).subscribe(
        (data) => {
          this.profile = data;
          // Cargar productos (ajusta según tu implementación)
          this.productos = data.productos || [];
        },
        (error) => {
          console.error('Error al obtener el perfil:', error);
          this.router.navigate(['/login']);
        }
      );
    } else {
      this.router.navigate(['/login']);
    }
  }






  logout(): void {
    
    this.proveedorService.logout();
 
    this.router.navigate(['/login']);
  }


  crearProducto(): void {
    this.router.navigate(['/new-product', this.profile._id]);
  }


  actualizarPerfil(): void {
    this.router.navigate(['/actualizar-perfil', this.profile._id]);
  }
}
