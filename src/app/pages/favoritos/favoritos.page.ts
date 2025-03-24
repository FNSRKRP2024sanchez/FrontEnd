import { Component, inject, Input, input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonList, IonItem, IonLabel, IonSpinner } from '@ionic/angular'; // Aseguramos de que IonSpinner esté importado
import { ApiService } from 'src/app/api.service'; 
import { ProductCardComponent } from 'src/app/components/product-card/product-card.component'; 
import { IonicModule } from '@ionic/angular';  

@Component({
  selector: 'app-favoritos',
  templateUrl: './favoritos.page.html',
  styleUrls: ['./favoritos.page.scss'],
  standalone: true,
  imports: [IonicModule, ProductCardComponent, CommonModule, FormsModule] 
})
export class FavoritosPage implements OnInit {
  // @Input() producto: any [] = [];
  // @Input() favorios: boolean = false;



  private apiService = inject(ApiService);

  productosFavoritos: any; 
  isLoading: boolean = true; 

  constructor() { }

  ngOnInit() {
    this.loadFavoritos(); 
  }

  loadFavoritos() {
    this.apiService.getProductosFavoritos().subscribe(
      (productos) => {
        this.productosFavoritos = productos; 
        this.isLoading = false; 
      },
      (error) => {
        console.error('Error al cargar los productos favoritos', error);
        this.isLoading = false; 
      }
    );
  }
}
