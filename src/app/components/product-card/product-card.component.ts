import { Component, inject, Input, OnInit } from '@angular/core';
import { IonCol, IonButton, IonRow, IonIcon, IonGrid, IonCard, IonCardContent, IonList } from '@ionic/angular/standalone';
import { ApiService } from '../../api.service';
import { Router } from '@angular/router';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss'],
  imports: [IonCol, IonButton, IonRow, 
    // IonIcon, IonList,
    IonGrid, IonCard, IonCardContent,  RouterModule],
})
export class ProductCardComponent implements OnInit {
  productos: any[] = [];
  private ApiService = inject(ApiService);
  private router = inject(Router);

  @Input() proveedorId?: string;
  @Input() nombreProducto?: string;
  @Input() favoritos?: boolean;  

  constructor() {}

  ngOnInit(): void {
    this.cargarProductos();
  }

  cargarProductos(): void {
    if (this.favoritos) {
      this.ApiService.getProductosFavoritos().subscribe(
        (data) => {
          console.log('Productos favoritos recibidos:', data);
          this.productos = data;
        },
        (error) => {
          console.error('Error al obtener los productos favoritos:', error);
        }
      );
    } else if (this.proveedorId) {
      this.ApiService.getProductosByProveedor(this.proveedorId).subscribe(
        (data) => {
          console.log('Productos por proveedor recibidos:', data);
          this.productos = data;
        },
        (error) => {
          console.error('Error al obtener los productos por proveedor:', error);
        }
      );
    } else if (this.nombreProducto) {
      this.ApiService.getProductosByNombre(this.nombreProducto).subscribe(
        (data) => {
          console.log('Productos por nombre recibidos:', data);
          this.productos = data;
        },
        (error) => {
          console.error('Error al obtener los productos por nombre:', error);
        }
      );
    }
  }

  verDetalles(id: string) {
    this.router.navigate(['/producto', id]); 
  }
}
