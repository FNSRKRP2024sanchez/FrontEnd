import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle, IonLabel, IonText, IonButton, IonItem, IonImg, IonIcon } from '@ionic/angular/standalone';
import { ApiService } from 'src/app/api.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-producto',
  templateUrl: './producto.page.html',
  styleUrls: ['./producto.page.scss'],
  standalone: true,
  imports: [IonIcon, 
    // IonItem, 
    // IonHeader,
    // IonTitle,
    // IonToolbar,
    IonContent,
    CommonModule,
    FormsModule,
    IonCard, IonCardContent, IonCardTitle, 
    // IonLabel, IonText, IonItem,
    IonButton, IonCardHeader, IonCardSubtitle,  IonImg
  ]
})
export class ProductoPage implements OnInit {
  productoId: string = '';  
  producto: any = {}; 
  imagenUrl: string = ''; // Variable para almacenar la URL de la imagen
  private apiService = inject(ApiService);
  private route = inject(ActivatedRoute);

  constructor() { }

  ngOnInit() {
    this.productoId = this.route.snapshot.paramMap.get('id') || '';

    if (this.productoId) {
      this.loadProducto();
    }
  }

  loadProducto() {
    this.apiService.getProductoById(this.productoId).subscribe(
      (data) => {
        console.log('Producto recibido:', data);
        console.log('URL de la imagen:', this.imagenUrl);
        this.producto = data; 

        // Verifica si existen imágenes y establece la URL de la primera imagen
        if (this.producto.imagenes && this.producto.imagenes.length > 0) {
          // Llama a la función getImageUrl para obtener la URL completa
          this.imagenUrl = this.apiService.getImageUrl(this.producto.imagenes[0]);
        }
      },
      (error) => {
        console.error('Error al obtener el producto:', error);
      }
    );
  }

  agregarAFavoritos(producto: any) {
    const nuevoEstado = !producto.favorito;

    this.apiService.marcarComoFavorito(producto._id, nuevoEstado).subscribe(
      (response) => {
        console.log('Producto actualizado como favorito:', response);
        producto.favorito = response.producto.favorito;
      },
      (error) => {
        console.error('Error al actualizar el favorito:', error);
      }
    );
  }
}


