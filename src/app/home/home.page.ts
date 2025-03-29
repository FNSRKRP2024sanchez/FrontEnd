import { Component, inject } from '@angular/core';
  import { 
    IonHeader, IonToolbar, IonContent, IonIcon, 
    IonButtons, IonButton, IonSearchbar, AlertController, IonFooter } from '@ionic/angular/standalone';
  import { addIcons } from 'ionicons';
  import { 
    home, star, options, person, people,
    helpCircle, addCircle,  heart, close,
    search, menu, cart, notifications,
    settings, information, share, bookmark
  } from 'ionicons/icons';
  import { PopoverController } from '@ionic/angular'; 
  import { FormsModule } from '@angular/forms';
  import { Router } from '@angular/router';
  import { ProveedorCardComponent } from '../components/proveedor-card/proveedor-card.component';
  import { MenuCategoriasComponent } from '../menu-categorias/menu-categorias.component';
  import { FooterNavComponent } from '../components/footer-nav/footer-nav.component';




  @Component({
      selector: 'app-home',
      templateUrl: 'home.page.html',
      styleUrls: ['home.page.scss'],
      standalone: true,
      imports: [
        // IonFooter, 
        IonHeader, IonToolbar, IonContent, FormsModule, 
        IonButton, ProveedorCardComponent, IonSearchbar, 
        IonIcon, 
        // IonButtons, 
        FooterNavComponent,
      ],
    })
  export class HomePage {
    private router = inject(Router); 
    private popoverController = inject(PopoverController); 
  
    constructor(private alertController: AlertController) {
      addIcons({ 
        home, star, options, person, people,heart,        // Icono de corazón
        close,        // Icono de cerrar (x)
        search,       // Icono de lupa/búsqueda
        menu,         // Icono de menú (hamburguesa)
        cart,         // Icono de carrito
        notifications,// Icono de notificaciones
        settings,     // Icono de configuración
        information,  // Icono de información (i)
        share,        // Icono de compartir
        bookmark,
        'help-circle': helpCircle,
        'add-circle': addCircle,

      });
    }
  
    async gotoDashboard() {
      const alert = await this.alertController.create({
        header: 'Necesitas crear una cuenta para agregar productos',
        message: '¿Deseas crear una cuenta?',
        buttons: [
          {
            text: 'Cancelar',
            role: 'cancel'
          },
          {
            text: 'Crear Cuenta',
            handler: () => {
              this.router.navigate(['/dashboard']);
            }
          }
        ]
      });
      await alert.present();
    }
  
    // async mostrarIconos() {
    //   const alert = await this.alertController.create({
    //     header: 'Iconos',
    //     buttons: ['Cerrar'],
    //     backdropDismiss: false,
    //   });
    //   await alert.present();
    // }
    async mostrarIconos() {
      const alert = await this.alertController.create({
        header: 'Iconos Disponibles',
        message: `
          🏠
          ⭐⚙️👤👥➕❤️🔍☰
        `,
        buttons: ['Cerrar'],
        backdropDismiss: false,
        cssClass: 'custom-icon-alert'
      });
      await alert.present();
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
        this.router.navigate(['/resultados'], { queryParams: { nombre } });
      }
    }
  }



  