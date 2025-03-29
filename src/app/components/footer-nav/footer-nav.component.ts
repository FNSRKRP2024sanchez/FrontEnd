import { Component, inject } from '@angular/core';
import { 
  IonButton, IonButtons, IonIcon, IonToolbar 
} from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { home, star, options, person, people } from 'ionicons/icons';
import { Router } from '@angular/router';
import { PopoverController } from '@ionic/angular';
import { MenuCategoriasComponent } from '../../menu-categorias/menu-categorias.component';

@Component({
  selector: 'app-footer-nav',
  templateUrl: './footer-nav.component.html',
  styleUrls: ['./footer-nav.component.scss'],
  standalone: true,
  imports: [IonToolbar, IonButtons, IonButton, IonIcon]
})
export class FooterNavComponent {
  private router = inject(Router);
  private popoverController = inject(PopoverController);

  constructor() {
    addIcons({ home, star, options, person, people });
  }

  navigateTo(route: string) {
    this.router.navigate([route]);
  }

  async openOptions(event: Event) {
    const popover = await this.popoverController.create({
      component: MenuCategoriasComponent,
      event: event,
      translucent: true,
    });
    await popover.present();
  }
}

