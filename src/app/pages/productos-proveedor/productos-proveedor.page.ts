import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonLabel, IonButton, IonCard, IonCardTitle, IonCardSubtitle, IonCardHeader, IonCardContent, IonText } from '@ionic/angular/standalone';
import { ActivatedRoute } from '@angular/router';
import { ProductCardComponent } from '../../components/product-card/product-card.component';


@Component({
  selector: 'app-productos-proveedor',
  templateUrl: './productos-proveedor.page.html',
  styleUrls: ['./productos-proveedor.page.scss'],
  standalone: true,
  imports: [
    // IonText, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle, IonCard, IonButton, 
    // IonLabel, 
    IonContent,
    IonHeader,
    IonTitle,
    IonToolbar,
    CommonModule,
    FormsModule, 
    ProductCardComponent 
  ]
})
export class ProductosProveedorPage implements OnInit {
  proveedorId: string = '';  

  private route = inject(ActivatedRoute);

  constructor() { }

  ngOnInit() {
 
    this.proveedorId = this.route.snapshot.paramMap.get('proveedorId') || '';
  }
}
