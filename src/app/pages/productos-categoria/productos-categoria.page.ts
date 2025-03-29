// import { Component, OnInit, inject } from '@angular/core';  // Importa 'inject'
// import { ActivatedRoute } from '@angular/router';
// import { ApiService } from 'src/app/api.service'; // Asegúrate de importar ApiService
// import { IonContent, IonHeader, IonTitle, IonToolbar, IonSpinner, IonList, IonItem, IonLabel } from '@ionic/angular/standalone';
// import { CommonModule } from '@angular/common';
// import { FormsModule } from '@angular/forms';



// @Component({
//   selector: 'app-productos-categoria',
//   templateUrl: './productos-categoria.page.html',
//   styleUrls: ['./productos-categoria.page.scss'],
//   standalone: true,
//   imports: [IonLabel,  IonSpinner, IonItem,IonList, IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule],
// })
// export class ProductosCategoriaPage implements OnInit {


//   private route = inject(ActivatedRoute);  
//   private apiService = inject(ApiService);  

//   categoria: string = '';  
//   productos: any[] = [];  

//   ngOnInit() {
  
//     this.categoria = this.route.snapshot.paramMap.get('categoria') || '';

    
//     if (this.categoria) {
//       this.apiService.getProductosByCategoria(this.categoria).subscribe(
//         (data) => {
//           this.productos = data;  
//           console.log(data)
//         },
//         (error) => {
//           console.error('Error al obtener los productos:', error);
//         }
//       );
//     }
//   }
// }






import { Component, OnInit, inject } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from 'src/app/api.service';
import { 
  IonContent, IonHeader, IonToolbar, IonSpinner, 
  IonSearchbar, IonCard, IonButton 
} from '@ionic/angular/standalone';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { FooterNavComponent } from '../../components/footer-nav/footer-nav.component';



@Component({
  selector: 'app-productos-categoria',
  templateUrl: './productos-categoria.page.html',
  styleUrls: ['./productos-categoria.page.scss'],
  standalone: true,
  imports: [
    IonContent, 
    IonHeader, 
    IonToolbar, 
    IonSpinner,
    IonSearchbar,
    IonCard,
    IonButton,
    CommonModule, 
    FormsModule,
    FooterNavComponent
  ],
})
export class ProductosCategoriaPage implements OnInit {
  private route = inject(ActivatedRoute);  
  private apiService = inject(ApiService);  
  private router = inject(Router);

  categoria: string = '';  
  productos: any[] = [];  
  productosOriginales: any[] = []; // Almacena todos los productos de la categoría

  ngOnInit() {
    this.categoria = this.route.snapshot.paramMap.get('categoria') || '';

    if (this.categoria) {
      this.apiService.getProductosByCategoria(this.categoria).subscribe(
        (data) => {
          this.productos = data;
          this.productosOriginales = [...data]; // Guardamos copia de todos los productos
          console.log(data);
        },
        (error) => {
          console.error('Error al obtener los productos:', error);
        }
      );
    }
  }

  buscar(event: any): void {
    const termino = event.target.value.trim().toLowerCase();
    
    if (termino === '') {
      // Si el buscador está vacío, mostramos todos los productos
      this.productos = [...this.productosOriginales];
    } else {
      // Filtramos solo dentro de los productos de esta categoría
      this.productos = this.productosOriginales.filter(producto => 
        producto.Nombre.toLowerCase().includes(termino) ||
        (producto.Descripcion && producto.Descripcion.toLowerCase().includes(termino))
      );
    }
  }

  // verProducto(productoId: string): void {
  //   this.router.navigate(['/producto', productoId]);
  // }
  verProducto(productoId: any): void {
    if (!productoId) {
      console.error('ID de producto no definido');
      return;
    }
    console.log('Navegando a producto con ID:', productoId);
    this.router.navigate(['/producto', productoId.toString()]);
  }
}

