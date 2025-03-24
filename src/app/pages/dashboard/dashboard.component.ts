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
}