import { Component, inject } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonFooter, IonIcon, IonItem, IonButtons, IonImg, IonButton, IonSearchbar } from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { heart, home, star, options, person, people,addCircle } from 'ionicons/icons';
import { PopoverController } from '@ionic/angular'; 
import { FormsModule } from '@angular/forms';
import { ProductCardComponent } from '../components/product-card/product-card.component';
import { Router } from '@angular/router';
import { ApiService } from '../api.service';
import { ProveedorCardComponent } from '../components/proveedor-card/proveedor-card.component';
import { MenuCategoriasComponent } from '../menu-categorias/menu-categorias.component';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  imports: [IonHeader, IonToolbar,  IonContent, FormsModule, 
    IonButton, 
    // ProductCardComponent, IonTitle, IonImg, 
    ProveedorCardComponent,
    IonSearchbar, IonIcon, IonButtons, IonFooter],
})
export class HomePage {
  productosPorProveedor: any[] = [];
  private router = inject(Router); 
  private ApiService = inject(ApiService);
  private popoverController = inject(PopoverController); 

  constructor() {
    addIcons({ heart, home, star, options, person, people, addCircle});
  }

  goToPerfil() {
    this.router.navigate(['/perfil']);
  }

  goToFavoritos() {
    this.router.navigate(['/favoritos']);
  }

  gotoRegister(){
    this.router.navigate(['/register']);
  }   

  gotoDashboard(){
    this.router.navigate(['/dashboard']);
  }   

  async presentPopover(event: Event) {
    const popover = await this.popoverController.create({
      component: MenuCategoriasComponent,
      event: event,
      translucent: true, 
    });
    await popover.present();
  }


  buscar(event: any): void {
    const nombre = event.target.value.trim();
    if (nombre.length >= 4) {
      console.log('Buscando productos con nombre:', nombre); 
      this.router.navigate(['/resultados'], { queryParams: { nombre } });
    }
  }
  ngOnInit() {
  }
}

