import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonButton, IonTitle, IonToolbar, IonList, IonItem, IonLabel } from '@ionic/angular/standalone';
import { Router, ActivatedRoute } from '@angular/router';
import { ApiService } from 'src/app/api.service';
import { ProductCardComponent } from '../../components/product-card/product-card.component';
import { FooterNavComponent } from '../../components/footer-nav/footer-nav.component';


@Component({
  selector: 'app-resultados',
  templateUrl: './resultados.page.html',
  styleUrls: ['./resultados.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, IonList,
    //  IonItem, IonLabel, IonButton, 
     ProductCardComponent,
     FooterNavComponent,
    ]
})
export class ResultadosPage implements OnInit {

  nombreProducto: string = '';
  productos: any[] = [];
  private ApiService = inject(ApiService);
  private route = inject(ActivatedRoute);

  constructor() { }

  ngOnInit() {
    
    this.route.queryParams.subscribe(params => {
      this.nombreProducto = params['nombre'] || '';
      if (this.nombreProducto) {
        this.buscarProductos();
      }
    });
  }

  buscarProductos(): void {
    
    this.ApiService.getProductosByNombre(this.nombreProducto).subscribe(
      (data) => {
        console.log('Productos encontrados:', data);
        this.productos = data; 
      },
      (error) => {
        console.error('Error al obtener productos:', error);
      }
    );
  }
}
