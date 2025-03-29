// import { Component, OnInit } from '@angular/core';
// import { IonItem, IonList, IonContent, IonIcon, IonLabel } from '@ionic/angular/standalone';
// import { Router } from '@angular/router'; 

// @Component({
//   selector: 'app-menu-categorias',
//   templateUrl: './menu-categorias.component.html',
//   styleUrls: ['./menu-categorias.component.scss'],
//   imports: [IonLabel, IonIcon, IonContent, IonItem, IonList]
// })
// export class MenuCategoriasComponent implements OnInit {

//   constructor(private router: Router) { }

//   ngOnInit() {}

//   option1() {
//     console.log('Opción "Frutas-verduras" seleccionada');
//     this.router.navigate(['/productos-categoria', 'Frutas y Verduras']);
//   }

//   option2() {
//     console.log('Opción "Lacteos" seleccionada');
//     this.router.navigate(['/productos-categoria', 'Lacteos']);
//   }

//   option3() {
//     console.log('Opción "Granos-cereales" seleccionada');
//     this.router.navigate(['/productos-categoria', 'Granos y cereales']);
//   }


//   option4() {
//     console.log('Opción "Legumbres-Frutos secos" seleccionada');
//     this.router.navigate(['/productos-categoria', 'Legumbres y Frutos secos']);
//   }
// }




import { Component, OnInit } from '@angular/core';
import { 
  IonItem, 
  IonList, 
  IonIcon,
  IonLabel,
  IonContent
} from '@ionic/angular/standalone';
import { Router } from '@angular/router';
import { addIcons } from 'ionicons';
import { 
  nutrition, 
  iceCream, 
  leaf, 
  fitness, 
  chevronForward 
} from 'ionicons/icons';

@Component({
  selector: 'app-menu-categorias',
  templateUrl: './menu-categorias.component.html',
  styleUrls: ['./menu-categorias.component.scss'],
  standalone: true,
  imports: [
    IonItem, 
    IonList,
    IonIcon,
    IonLabel,
    IonContent
  ]
})
export class MenuCategoriasComponent implements OnInit {

  constructor(private router: Router) { 
    // Registrar los iconos que vamos a usar
    addIcons({ 
      nutrition, 
      'ice-cream': iceCream, 
      leaf, 
      fitness, 
      'chevron-forward': chevronForward 
    });
  }

  ngOnInit() {}

  option1() {
    console.log('Opción "Frutas y Verduras" seleccionada');
    this.router.navigate(['/productos-categoria', 'Frutas y Verduras']);
  }

  option2() {
    console.log('Opción "Lácteos" seleccionada');
    this.router.navigate(['/productos-categoria', 'Lácteos']);
  }

  option3() {
    console.log('Opción "Granos y cereales" seleccionada');
    this.router.navigate(['/productos-categoria', 'Granos y cereales']);
  }

  option4() {
    console.log('Opción "Legumbres y Frutos secos" seleccionada');
    this.router.navigate(['/productos-categoria', 'Legumbres y Frutos secos']);
  }
}