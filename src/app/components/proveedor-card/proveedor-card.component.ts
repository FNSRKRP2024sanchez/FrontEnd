import { Component, inject, OnInit } from '@angular/core';
import { IonCol, IonButton, IonRow, IonIcon, IonGrid, IonCard, IonCardContent, IonList } from '@ionic/angular/standalone';
import { ApiService } from '../../api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-proveedor-card',
  templateUrl: './proveedor-card.component.html',
  styleUrls: ['./proveedor-card.component.scss'],
  imports: [ 
    IonButton, 
    // IonRow, IonGrid, IonCol,
    // IonIcon, IonList,
    IonCard, IonCardContent, ],
})



export class ProveedorCardComponent implements OnInit {
  proveedores: any[] = [];  
  private ApiService = inject(ApiService);
  private router = inject(Router);

  constructor() {}


  ngOnInit(): void {
    this.ApiService.getProvedores().subscribe(
      (data) => {
        console.log('Datos de proveedores recibidos:', data);
        this.proveedores = data; 
      },
      (error) => {
        console.error('Error al obtener los proveedores:', error);
      }
    );
  }


  goTOProduct(proveedorId: string) {
    this.router.navigate(['/productos-proveedor', proveedorId]);
  }
}
