import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { 
  IonContent, IonCard, IonCardContent, IonCardHeader, 
  IonCardTitle, IonButton, IonImg, IonIcon, IonSpinner, IonCardSubtitle } from '@ionic/angular/standalone';
import { ApiService } from 'src/app/api.service';
import { ActivatedRoute, Router } from '@angular/router';
import { DatePipe } from '@angular/common';
import { addIcons } from 'ionicons';
import { cart, star, starOutline, warning } from 'ionicons/icons';
import { FooterNavComponent } from '../../components/footer-nav/footer-nav.component';

interface Producto  {
  _id: string;
  nombre: string;
  categoria: string;
  descripcion: string;
  precio: number;
  favorito: boolean;
  imagenes: string[];
  fecha: string | Date;
  stock: number;
  telefono: string;
}

@Component({
  selector: 'app-producto',
  templateUrl: './producto.page.html',
  styleUrls: ['./producto.page.scss'],
  standalone: true,
  imports: [
    IonIcon, 
    // IonSpinner,DatePipe, 
    // IonCardContent, IonButton, IonCardSubtitle, 
    IonContent, IonCard, 
    IonCardTitle, IonCardHeader,  IonImg,
    CommonModule, FormsModule,
    FooterNavComponent,
  ]
})
export class ProductoPage implements OnInit {
  productoId: string = '';
  producto: Producto | null = null;
  imagenUrl: string = 'assets/images/placeholder.png';
  isLoading: boolean = true;
  errorMessage: string = '';



  constructor(
    private apiService: ApiService,
    private route: ActivatedRoute,
    private router: Router
  ) {
    addIcons({ cart, star, starOutline, warning });
  }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.productoId = params.get('id') || '';
      if (this.productoId) {
        this.loadProducto();
      } else {
        this.showError('ID de producto no válido');
      }
    });
  }

  private loadProducto(): void {
    this.isLoading = true;
    this.errorMessage = '';

    this.apiService.getProductoById(this.productoId).subscribe({
      next: (response) => {
        this.handleProductResponse(response);
      },
      error: (err) => {
        this.showError('Error al cargar el producto');
        console.error('Error:', err);
      }
    });
  }

  private handleProductResponse(response: any): void {
    this.isLoading = false;
    
    if (response && (response.producto || response._id)) {
      this.producto = response.producto || response;
      this.normalizeProductData();
      this.setProductImage();
    } else {
      this.showError('Producto no encontrado');
    }
  }

  private normalizeProductData(): void {
    if (!this.producto) return;
    
    this.producto = {
      ...this.producto,
      fecha: this.producto.fecha ? new Date(this.producto.fecha) : new Date(),
      precio: Number(this.producto.precio) || 0,
      stock: Number(this.producto.stock) || 0,
      favorito: Boolean(this.producto.favorito),
      telefono: this.producto.telefono || 'No disponible',
      descripcion: this.producto.descripcion || 'Sin descripción disponible'
    };
  }

  private setProductImage(): void {
    if (this.producto?.imagenes?.length) {
      this.imagenUrl = this.apiService.getImageUrl(this.producto.imagenes[0]);
    }
  }

  private showError(message: string): void {
    this.isLoading = false;
    this.errorMessage = message;
    setTimeout(() => this.router.navigate(['/home']), 3000);
  }

  toggleFavorito(): void {
    if (!this.producto) return;

    const nuevoEstado = !this.producto.favorito;
    this.apiService.marcarComoFavorito(this.producto._id, nuevoEstado).subscribe({
      next: () => {
        if (this.producto) {
          this.producto.favorito = nuevoEstado;
        }
      },
      error: (err) => {
        console.error('Error al actualizar favorito:', err);
      }
    });
  }
  // agregarAFavoritos(producto: any) {
  //   const nuevoEstado = !producto.favorito;

  //   this.apiService.marcarComoFavorito(producto._id, nuevoEstado).subscribe(
  //     (response) => {
  //       console.log('Producto actualizado como favorito:', response);
  //       producto.favorito = response.producto.favorito;
  //     },
  //     (error) => {
  //       console.error('Error al actualizar el favorito:', error);
  //     }
  //   );
  // }
}










// import { Component, inject, OnInit } from '@angular/core';
// import { CommonModule } from '@angular/common';
// import { FormsModule } from '@angular/forms';
// import { 
//   IonContent, IonCard, IonCardContent, IonCardHeader, 
//   IonCardTitle, IonButton, IonImg, IonIcon, IonSpinner 
// } from '@ionic/angular/standalone';
// import { ApiService } from 'src/app/api.service';
// import { ActivatedRoute, Router } from '@angular/router';
// import { DatePipe } from '@angular/common';
// import { addIcons } from 'ionicons';
// import { cart, star, starOutline, warning, call } from 'ionicons/icons';

// interface Producto {
//   _id: string;
//   nombre: string;
//   categoria: string;
//   descripcion: string;
//   precio: number;
//   favorito: boolean;
//   imagenes: string[];
//   fecha: Date;
//   stock: number;
//   telefono: string;
// }

// @Component({
//   selector: 'app-producto',
//   templateUrl: './producto.page.html',
//   styleUrls: ['./producto.page.scss'],
//   standalone: true,
//   imports: [
//     IonIcon, IonContent, IonCard, IonCardContent, 
//     IonCardTitle, IonCardHeader, IonButton, IonImg,
//     IonSpinner, CommonModule, FormsModule, DatePipe
//   ]
// })
// export class ProductoPage implements OnInit {
//   productoId: string = '';
//   producto: Producto | null = null;
//   imagenUrl: string = 'assets/images/placeholder.png';
//   isLoading: boolean = true;
//   errorMessage: string = '';

//   productos: any[] = [];


//   private apiService = inject(ApiService);
//   private route = inject(ActivatedRoute);
//   private router = inject(Router);

//   constructor() {
//     addIcons({ cart, star, starOutline, warning, call });
//   }

//   ngOnInit(): void {
//     this.obtenerIdProducto();
//   }

//   private obtenerIdProducto(): void {
//     this.productoId = this.route.snapshot.paramMap.get('id') || '';
//     if (!this.productoId) {
//       this.mostrarError('ID de producto no válido');
//       return;
//     }
//     this.cargarProducto();
//   }

//   private cargarProducto(): void {
//     this.isLoading = true;
//     this.errorMessage = '';

//     this.apiService.getProductoById(this.productoId).subscribe({
//       next: (response: any) => this.procesarRespuestaProducto(response),
//       error: (error) => this.manejarErrorCarga(error)
//     });
//   }

//   private procesarRespuestaProducto(response: any): void {
//     if (response && (response.producto || response._id)) {
//       this.producto = this.formatearDatosProducto(response.producto || response);
//       this.establecerImagenProducto();
//     } else {
//       this.mostrarError('Producto no encontrado');
//     }
//     this.isLoading = false;
//   }

//   private formatearDatosProducto(producto: any): Producto {
//     return {
//       _id: producto._id,
//       nombre: producto.nombre || 'Sin nombre',
//       categoria: producto.categoria || 'Sin categoría',
//       descripcion: producto.descripcion || 'Sin descripción disponible',
//       precio: Number(producto.precio) || 0,
//       favorito: Boolean(producto.favorito),
//       imagenes: producto.imagenes || [],
//       fecha: producto.fecha ? new Date(producto.fecha) : new Date(),
//       stock: Number(producto.stock) || 0,
//       telefono: producto.telefono || 'No disponible'
//     };
//   }

//   private establecerImagenProducto(): void {
//     if (this.producto?.imagenes?.length) {
//       this.imagenUrl = this.apiService.getImageUrl(this.producto.imagenes[0]);
//     } else {
//       this.imagenUrl = 'assets/images/placeholder.png';
//     }
//   }

//   private manejarErrorCarga(error: any): void {
//     console.error('Error al cargar producto:', error);
//     this.mostrarError('Error al cargar el producto');
//     this.isLoading = false;
//   }

//   private mostrarError(mensaje: string): void {
//     this.errorMessage = mensaje;
//     setTimeout(() => this.router.navigate(['/home']), 3000);
//   }

//   alternarFavorito(): void {
//     if (!this.producto) return;

//     const nuevoEstado = !this.producto.favorito;
//     this.apiService.marcarComoFavorito(this.producto._id, nuevoEstado).subscribe({
//       next: () => {
//         if (this.producto) {
//           this.producto.favorito = nuevoEstado;
//         }
//       },
//       error: (error) => {
//         console.error('Error al actualizar favorito:', error);
//         if (this.producto) {
//           this.producto.favorito = !nuevoEstado;
//         }
//       }
//     });
//   }

//   contactarVendedor(): void {
//     if (this.producto?.telefono) {
//       window.open(`tel:${this.producto.telefono}`, '_blank');
//     }
//   }
// }