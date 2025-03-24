import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonItem, IonLabel, IonInput, IonButton, IonTextarea, IonSelect, IonSelectOption } from '@ionic/angular/standalone';
import { ApiService } from '../../api.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-new-product',
  templateUrl: './new-product.page.html',
  styleUrls: ['./new-product.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, IonItem, IonLabel, IonInput, IonButton, IonTextarea, IonSelect, IonSelectOption]
})
export class NewProductPage implements OnInit {

  private apiService = inject(ApiService);
  proveedorId: string | null = null;
  data: any;

  producto = {
    Nombre: '',
    Descripcion: '',
    Precio: 0 as number | null,  // Explicitamente como número o null
    Stock: 0 as number | null,   // Explicitamente como número o null
    categoria: '',  
    url_direction: '',
    proveedor: '',
    imagenes: [] as File[] // Agregado para almacenar las imágenes seleccionadas
  };
  


  constructor(private activatedRoute: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe(params => {
      this.proveedorId = params.get('id');
    });

    if (!this.proveedorId) {
      this.proveedorId = localStorage.getItem('proveedorId');
    }

    if (this.proveedorId) {
      this.producto.proveedor = this.proveedorId;
    } else {
      console.error('Error: No se encontró el ID del proveedor logueado.');
    }

    this.apiService.getProductos().subscribe(response => {
      this.data = response;
    });
  }

  // Función para manejar la selección de archivos
  onFileChange(event: any) {
    if (event.target.files) {
      // Almacenar los archivos seleccionados en el array de imagenes
      this.producto.imagenes = Array.from(event.target.files);
    }
  }

  // Función para agregar el producto
  anadirProducto() {
    if (!this.producto.Nombre || !this.producto.Descripcion || !this.producto.Precio || !this.producto.Stock || !this.producto.categoria) {
      console.error('Todos los campos obligatorios deben estar completos.');
      alert('Por favor, completa todos los campos obligatorios.');
      return;
    }

    // Crear FormData para enviar datos y archivos
    const formData = new FormData();
    formData.append('Nombre', this.producto.Nombre);
    formData.append('Descripcion', this.producto.Descripcion);
    formData.append('Precio', this.producto.Precio?.toString() || '');
    formData.append('Stock', this.producto.Stock?.toString() || '');
    formData.append('categoria', this.producto.categoria);
    formData.append('proveedor', this.producto.proveedor);

    // Agregar las imágenes al FormData
    this.producto.imagenes.forEach((file: File) => {
      formData.append('imagenes', file, file.name);
    });

    // Realizar la solicitud para crear el producto
    this.apiService.postProducto(formData).subscribe({
      next: (response) => {
        console.log('Producto agregado:', response);
        alert('Producto creado exitosamente.');
        this.router.navigate(['/productos']);
      },
      error: (err) => {
        console.error('Error al agregar producto:', err);
        alert('Hubo un error al crear el producto.');
      }
    });
  }

  // Función para cancelar y regresar a la pantalla principal
  cancelar() {
    this.router.navigate(['/home']);
  }
}
