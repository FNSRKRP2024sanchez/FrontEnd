import { Component, OnInit } from '@angular/core';
import { IonItem, IonList } from '@ionic/angular/standalone';
import { Router } from '@angular/router'; 

@Component({
  selector: 'app-menu-categorias',
  templateUrl: './menu-categorias.component.html',
  styleUrls: ['./menu-categorias.component.scss'],
  imports: [IonItem, IonList]
})
export class MenuCategoriasComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {}

  option1() {
    console.log('Opción "Frutas-verduras" seleccionada');
    this.router.navigate(['/productos-categoria', 'Ropa']);
  }

  option2() {
    console.log('Opción "Lacteos" seleccionada');
    this.router.navigate(['/productos-categoria', 'Frutas y verduras']);
  }

  option3() {
    console.log('Opción "Granos-cereales" seleccionada');
    this.router.navigate(['/productos-categoria', 'Granos y cereales']);
  }


  option4() {
    console.log('Opción "Legumbres-Frutos secos" seleccionada');
    this.router.navigate(['/productos-categoria', 'Legumbres y Frutos secos']);
  }
}




