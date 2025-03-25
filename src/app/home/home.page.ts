  import { Component, inject } from '@angular/core';
  import { IonHeader, IonToolbar, IonTitle, IonContent, IonFooter, IonIcon, 
    IonItem, IonButtons, IonImg, IonButton, IonSearchbar, AlertController, 
    IonLabel, IonicSlides } from '@ionic/angular/standalone';
  import { addIcons } from 'ionicons';
  import { heart, home, star, options, person, people, addCircle, help } from 'ionicons/icons';
  import { PopoverController } from '@ionic/angular'; 
  import { FormsModule } from '@angular/forms';
  import { ProductCardComponent } from '../components/product-card/product-card.component';
  import { Router } from '@angular/router';
  import { ApiService } from '../api.service';
  import { ProveedorCardComponent } from '../components/proveedor-card/proveedor-card.component';
  import { MenuCategoriasComponent } from '../menu-categorias/menu-categorias.component';
  // import { Storage }
  // import { Storage } from '@ionic/storage-angular';
  // import { AuthService } from 'core/auth.service'; 
  // import { Storage } from '@ionic/storage-angular';
  // import { AuthService } from '../core/auth.service';





  @Component({
    selector: 'app-home',
    templateUrl: 'home.page.html',
    styleUrls: ['home.page.scss'],
    imports: [
      // IonLabel, 
      IonHeader, IonToolbar,  IonContent, FormsModule, 
      IonButton, ProveedorCardComponent, IonSearchbar, 
      IonIcon, IonButtons, IonFooter,
      // Storage, AuthService
      
    ],
  })
  export class HomePage {
    productosPorProveedor: any[] = [];
    private router = inject(Router); 
    private ApiService = inject(ApiService);
    private popoverController = inject(PopoverController); 



    // private storage = inject(Storage);
    // private authService = inject(AuthService); 






    constructor(private alertController: AlertController) {
      addIcons({ heart, home, star, options, person, people, addCircle, help});
      // this.storage.create();
    }


    async gotoDashboard() {
      const alert = await this.alertController.create({
        header: 'Nescesitas crear una cuenta para agregar productos',
        message: 'Deseas crear una cuenta',
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
    // async gotoDashboard() {
    //   const isLoggedIn = await this.authService.isAuthenticated();
      
    //   if(isLoggedIn) {
    //     this.router.navigate(['/new-product']);
    //     return;
    //   }

    //   const alert = await this.alertController.create({
    //     header: 'Acceso requerido',
    //     message: 'Para agregar un producto primero debes crear una cuenta',
    //     buttons: [
    //       {
    //         text: 'Cancelar',
    //         role: 'cancel'
    //       },
    //       {
    //         text: 'Crear Cuenta',
    //         handler: () => {
    //           this.router.navigate(['/dashboard']);
    //         }
    //       }
    //     ]
    //   });
    //   await alert.present();
    // }







    async mostrarIconos() {
      const alert = await this.alertController.create({
        header: 'Iconos',
        // message: '.',
        buttons: ['Cerrar'],
        backdropDismiss: false 
      });

      await alert.present();
    }
    









    goToPerfil() {
      this.router.navigate(['/perfil']);
    }

    goToFavoritos() {
      this.router.navigate(['/favoritos']);
    }

    gotoRegister() {
      this.router.navigate(['/register']);
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




