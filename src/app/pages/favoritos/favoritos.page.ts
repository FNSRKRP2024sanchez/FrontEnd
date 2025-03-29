// import { IonList } from '@ionic/angular/standalone';
// import { Component, inject, Input, input, OnInit } from '@angular/core';
// import { CommonModule } from '@angular/common';
// import { FormsModule } from '@angular/forms';
// import { IonContent, IonHeader, IonTitle, IonToolbar, IonList, IonItem, IonLabel, IonSpinner } from '@ionic/angular'; // Aseguramos de que IonSpinner esté importado
// import { ApiService } from 'src/app/api.service'; 
// import { ProductCardComponent } from 'src/app/components/product-card/product-card.component'; 
// import { IonicModule } from '@ionic/angular';  

// @Component({
//   selector: 'app-favoritos',
//   templateUrl: './favoritos.page.html',
//   styleUrls: ['./favoritos.page.scss'],
//   standalone: true,
//   imports: [IonicModule, ProductCardComponent, CommonModule, FormsModule] 
// })
// export class FavoritosPage implements OnInit {
//   // @Input() producto: any [] = [];
//   // @Input() favorios: boolean = false;



  
//   private apiService = inject(ApiService);

//   productosFavoritos: any; 
//   isLoading: boolean = true; 

//   constructor() { }

//   ngOnInit() {
//     this.loadFavoritos(); 
//   }

//   loadFavoritos() {
//     this.apiService.getProductosFavoritos().subscribe(
//       (productos) => {
//         this.productosFavoritos = productos; 
//         this.isLoading = false; 
//       },
//       (error) => {
//         console.error('Error al cargar los productos favoritos', error);
//         this.isLoading = false; 
//       }
//     );
//   }
// }





// import { IonList } from '@ionic/angular/standalone';
// import { Component, inject, OnInit } from '@angular/core';
// import { CommonModule } from '@angular/common';
// import { FormsModule } from '@angular/forms';
// import { 
//   IonContent, IonHeader, IonTitle, IonToolbar, 
//   IonSpinner, IonButton, IonIcon
// } from '@ionic/angular/standalone';
// import { ApiService } from 'src/app/api.service';
// import { ProductCardComponent } from 'src/app/components/product-card/product-card.component';
// import { addIcons } from 'ionicons';
// import { starOutline } from 'ionicons/icons';
// import { RouterModule } from '@angular/router';

// @Component({
//   selector: 'app-favoritos',
//   templateUrl: './favoritos.page.html',
//   styleUrls: ['./favoritos.page.scss'],
//   standalone: true,
//   imports: [
//     IonContent, IonHeader, IonTitle, IonToolbar,
//     IonSpinner, 
//     // IonButton, IonIcon,
//     ProductCardComponent,
//     CommonModule, FormsModule, RouterModule,
//     IonList
//   ]
// })
// export class FavoritosPage implements OnInit {
//   private apiService = inject(ApiService);
//   productosFavoritos: any[] = [];
//   isLoading: boolean = true;

//   constructor() {
//     addIcons({ starOutline });
//   }

//   ngOnInit() {
//     this.loadFavoritos();
//   }

//   loadFavoritos() {
//     this.isLoading = true;
//     this.apiService.getProductosFavoritos().subscribe({
//       next: (productos) => {
//         this.productosFavoritos = Array.isArray(productos) ? productos : [];
//         this.isLoading = false;
//       },
//       error: (error) => {
//         console.error('Error al cargar favoritos:', error);
//         this.isLoading = false;
//         this.productosFavoritos = [];
//       }
//     });
//   }
//   refreshFavoritos(event: any) {
//     this.loadFavoritos();
//     event.target.complete();
//   }
// }



import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { 
  IonContent, IonHeader, IonTitle, IonToolbar, 
  IonSpinner, IonButton, IonIcon, IonList, IonItem, IonSearchbar
} from '@ionic/angular/standalone';
import { ApiService } from 'src/app/api.service';
import { ProductCardComponent } from 'src/app/components/product-card/product-card.component';
import { addIcons } from 'ionicons';
import { star, starOutline } from 'ionicons/icons';
import { RouterModule } from '@angular/router';
import { Router } from 'express';
import { FooterNavComponent } from '../../components/footer-nav/footer-nav.component';

@Component({
  selector: 'app-favoritos',
  templateUrl: './favoritos.page.html',
  styleUrls: ['./favoritos.page.scss'],
  standalone: true,
  imports: [
    IonContent, IonHeader, IonTitle, IonToolbar,
    IonSpinner, IonButton, IonIcon, 
    // IonList, IonItem,
    ProductCardComponent,
    CommonModule, FormsModule, RouterModule, FooterNavComponent
    // IonSearchbar,
  ]
})
export class FavoritosPage implements OnInit {

  private apiService = inject(ApiService);
  productosFavoritos: any[] = []; 
  isLoading: boolean = true;

  constructor(
  ) {
    addIcons({ star, starOutline });
  }

  ngOnInit() {
    this.loadFavoritos();
  }

  loadFavoritos() {
    this.isLoading = true;
    this.apiService.getProductosFavoritos().subscribe({
      next: (productos) => {
        this.productosFavoritos = Array.isArray(productos) ? productos : [];
        this.isLoading = false;
      },
      error: (error) => {
        console.error('Error al cargar favoritos:', error);
        this.isLoading = false;
        this.productosFavoritos = []; 
      }
    });
  }
}
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            

