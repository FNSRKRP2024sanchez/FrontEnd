import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, 
  IonLabel, IonList, IonItem, IonButton, IonCard, IonCardTitle, IonCardSubtitle, IonCardHeader, IonCardContent, IonText, 
  IonSearchbar, IonIcon, AlertController, IonFooter, IonButtons } from '@ionic/angular/standalone';
import { ActivatedRoute } from '@angular/router';
import { ProductCardComponent } from '../../components/product-card/product-card.component';
import { addIcons } from 'ionicons';
import { heart, home, star, options, person, people, addCircle, help,  } from 'ionicons/icons';
import { routes } from 'src/app/app.routes';
import { Router } from '@angular/router';
import { FooterNavComponent } from '../../components/footer-nav/footer-nav.component';
@Component({
  selector: 'app-productos-proveedor',
  templateUrl: './productos-proveedor.page.html',
  styleUrls: ['./productos-proveedor.page.scss'],
  standalone: true,
  imports: [
    // IonButtons, IonFooter, 
    IonSearchbar,
    // IonList, IonItem, IonLabel, IonCard, IonCardHeader, IonCardSubtitle, IonCardTitle, IonCardContent,
    IonContent,
    IonHeader,
    // IonTitle,
    IonToolbar,
    CommonModule,
    FormsModule,
    ProductCardComponent,
    FooterNavComponent,
]
})
export class ProductosProveedorPage implements OnInit {
  proveedorId: string = '';  

  private route = inject(ActivatedRoute);

  
  constructor(private router: Router) { 
    addIcons({ heart, home, star, options, person, people, addCircle, help,});
  }

  buscar(event: any): void {
    const nombre = event.target.value.trim();
    if (nombre.length >= 4) {
      console.log('Buscando productos con nombre:', nombre); 
      this.router.navigate(['/resultados'], { queryParams: { nombre } });
    }
  }

  navegarASeguidores() {
    this.router.navigate(['/perfil']);
  }
  
  navegarAFavoritos() {
    this.router.navigate(['/favoritos']);
  }
  
  navegarALikes() {
    this.router.navigate(['/likes']);
  }

  ngOnInit() {
    this.proveedorId = this.route.snapshot.paramMap.get('proveedorId') || '';
  }


}

