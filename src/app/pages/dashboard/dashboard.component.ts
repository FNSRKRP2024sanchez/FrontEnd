import { Component } from '@angular/core';
import { Router } from '@angular/router'; 
import { IonContent, IonButton } from '@ionic/angular/standalone';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
  standalone: true, 
  imports: [IonContent, IonButton] 
})
export class DashboardComponent {

  constructor(private router: Router) { }

  navigateToRegister() {
    this.router.navigate(['/register']);
  }

  navigateToLogin() {
    this.router.navigate(['/login']);
  }


  // async onLoginSuccess() {
  //   await this.authService.login(credentials);
  //   this.router.navigate(['/home']); // Redirige de vuelta al home
  // }


}



// import { Component } from '@angular/core';
// import { Router } from '@angular/router';
// import { IonContent, IonButton } from '@ionic/angular/standalone';
// import { AuthService } from '../../core/auth.service'; // Importa el servicio

// @Component({
//   selector: 'app-dashboard',
//   templateUrl: './dashboard.component.html',
//   styleUrls: ['./dashboard.component.scss'],
//   standalone: true,
//   imports: [IonContent, IonButton]
// })
// export class DashboardComponent {
//   // Define las credenciales (ajusta según tu modelo de datos)
//   credentials = {
//     email: '',
//     password: ''
//   };

//   constructor(
//     private router: Router,
//     private authService: AuthService // Inyecta el servicio
//   ) { }

//   navigateToRegister() {
//     this.router.navigate(['/register']);
//   }

//   navigateToLogin() {
//     this.router.navigate(['/login']);
//   }

//   async onLoginSuccess() {
//     try {
//       // Usa this.credentials y this.authService
//       await this.authService.login(this.credentials);
//       this.router.navigate(['/home']);
//     } catch (error) {
//       console.error('Error en login:', error);
//     }
//   }
// }