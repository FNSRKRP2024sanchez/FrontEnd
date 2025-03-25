import { Component, OnInit, inject } from '@angular/core';  // Importa 'inject'
import { ActivatedRoute } from '@angular/router';
import { ApiService } from 'src/app/api.service'; // Asegúrate de importar ApiService
import { IonContent, IonHeader, IonTitle, IonToolbar, IonSpinner, IonList, IonItem, IonLabel } from '@ionic/angular/standalone';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';



@Component({
  selector: 'app-productos-categoria',
  templateUrl: './productos-categoria.page.html',
  styleUrls: ['./productos-categoria.page.scss'],
  standalone: true,
  imports: [IonLabel,  IonSpinner, IonItem,IonList, IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule],
})
export class ProductosCategoriaPage implements OnInit {


  private route = inject(ActivatedRoute);  
  private apiService = inject(ApiService);  

  categoria: string = '';  
  productos: any[] = [];  

  ngOnInit() {
  
    this.categoria = this.route.snapshot.paramMap.get('categoria') || '';

    
    if (this.categoria) {
      this.apiService.getProductosByCategoria(this.categoria).subscribe(
        (data) => {
          this.productos = data;  
          console.log(data)
        },
        (error) => {
          console.error('Error al obtener los productos:', error);
        }
      );
    }
  }
}

