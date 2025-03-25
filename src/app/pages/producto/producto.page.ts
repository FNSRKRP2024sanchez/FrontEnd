import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonCard, IonCardContent, IonCardHeader, IonCardTitle, IonButton, IonImg, IonIcon } from '@ionic/angular/standalone';
import { ApiService } from 'src/app/api.service';
import { ActivatedRoute } from '@angular/router';
import { DatePipe } from '@angular/common';

// Interface recomendada (agregar en archivo aparte si prefieres)
interface Producto {
  _id: string;
  nombre: string;
  categoria: string;
  descripcion: string;
  precio: number;
  favorito: boolean;
  imagenes: string[];
  fecha: Date;         // Nuevo campo
  stock: number;       // Nuevo campo
  telefono: string;    // Nuevo campo
}



@Component({
  selector: 'app-producto',
  templateUrl: './producto.page.html',
  styleUrls: ['./producto.page.scss'],
  standalone: true,
  imports: [IonIcon, 
    IonContent,
    CommonModule,
    FormsModule,
    IonCard, 
    IonCardContent, 
    IonCardTitle,
    IonCardHeader, 
    IonButton, 
    IonImg,
    DatePipe // Agregar pipe de fecha
  ]
})
export class ProductoPage implements OnInit {
  productoId: string = '';  
  producto: Producto | null = null; // Usar interface
  imagenUrl: string = '';
  
  private apiService = inject(ApiService);
  private route = inject(ActivatedRoute);

  constructor() { }

  ngOnInit() {
    this.productoId = this.route.snapshot.paramMap.get('id') || '';
    this.loadProducto();
  }

  loadProducto() {
    this.apiService.getProductoById(this.productoId).subscribe({
      next: (data: Producto) => {
        this.producto = data;
        
        // if (this.producto.imagenes?.length) {
        //   this.imagenUrl = this.apiService.getImageUrl(this.producto.imagenes[0]);
        // }
        if (this.producto.imagenes?.length) {
          this.imagenUrl = this.apiService.getImageUrl(this.producto.imagenes[0]);
        }
      },
      error: (error) => {
        console.error('Error al obtener el producto:', error);
      }
    });
  }

  agregarAFavoritos(producto: Producto) {
    this.apiService.marcarComoFavorito(producto._id, !producto.favorito).subscribe({
      next: (response) => {
        if (this.producto) {
          this.producto.favorito = response.producto.favorito;
        }
      },
      error: (error) => {
        console.error('Error al actualizar favorito:', error);
      }
    });
  }
}
