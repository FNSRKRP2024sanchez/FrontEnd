import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  

  private ApiUrl = 'http://localhost:3001'; 

  constructor(private http: HttpClient) { }

  
  // Obtener todos los productos
  getProductos(): Observable<any> {
    return this.http.get<any>(`${this.ApiUrl}/api/productos`);
  }

  // Obtener un producto por su ID
  getProductoById(id: string): Observable<any> {
    return this.http.get<any>(`${this.ApiUrl}/api/productos/${id}`);
  }

  getImageUrl(imagen: string): string {
    return `${this.ApiUrl}/uploads/${imagen.replace(/\\/g, '/')}`;
  }
// getImageUrl(imagen: string): string {
//   return `${this.ApiUrl}/uploads/${encodeURIComponent(imagen).replace(/\\/g, '/')}`;
// }

  // Crear un nuevo producto
  // postProducto(data: FormData): Observable<any> {
  //   return this.http.post(`${this.ApiUrl}/api/productos`, data);
  // }


  
  postProducto(data: FormData): Observable<any> {
    return this.http.post(`${this.ApiUrl}/api/productos`, data);
  }


  // Registrar un nuevo usuario
  registerUser(data: any): Observable<any> {
    return this.http.post(`${this.ApiUrl}/api/users`, data);
  }

  // Iniciar sesión de usuario
  loginUser(): Observable<any> {
    return this.http.get(`${this.ApiUrl}/api/users`);
  }

getProvedores(): Observable<any> {
  return this.http.get<any>(`${this.ApiUrl}/api/proveedores`);  
}


  // Obtener productos por proveedor
  getProductosByProveedor(proveedorId: string): Observable<any> {
    return this.http.get<any>(`${this.ApiUrl}/api/productos/proveedor/${proveedorId}`);
  }

  // Obtener todos los productos
  getAllProductos(): Observable<any> {
    return this.http.get<any>(`${this.ApiUrl}/api/productos`);
  }

  getProductosByCategoria(categoria: string): Observable<any> {
    return this.http.get<any>(`${this.ApiUrl}/api/productos/categoria/${categoria}`);
  }

  getProductosByNombre(nombre: string) {
    return this.http.get<any[]>(`${this.ApiUrl}/api/productos/nombre/${nombre}`);
  }

  marcarComoFavorito(id: string, favorito: boolean): Observable<any> {
    return this.http.put<any>(`${this.ApiUrl}/api/productos/${id}/favorito`, { favorito });
  }

  getProductosFavoritos(): Observable<any[]> {
    return this.http.get<any[]>(`${this.ApiUrl}/api/productos/favoritos/favorito=true`);
  }

}






// import { HttpClient } from '@angular/common/http';
// import { Injectable } from '@angular/core';
// import { Observable, catchError, throwError } from 'rxjs';

// @Injectable({
//   providedIn: 'root'
// })
// export class ApiService {
//   private ApiUrl = 'http://localhost:3001'; 

//   constructor(private http: HttpClient) { }

//   // Versión mejorada de getProductoById
//   getProductoById(id: string): Observable<any> {
//     if (!id) {
//       return throwError(() => new Error('ID de producto no válido'));
//     }
    
//     return this.http.get<any>(`${this.ApiUrl}/api/productos/${id}`).pipe(
//       catchError(error => {
//         console.error('Error al obtener producto:', error);
//         return throwError(() => new Error('Error al cargar el producto'));
//       })
//     );
//   }

//   // Versión mejorada de getImageUrl
//   getImageUrl(imagen: string): string {
//     if (!imagen) {
//       return 'assets/images/placeholder.png';
//     }
    
//     // Si ya es una URL completa
//     if (imagen.startsWith('http') || imagen.startsWith('data:')) {
//       return imagen;
//     }
    
//     // Normalizar rutas para Windows/Linux
//     const normalizedPath = imagen.replace(/\\/g, '/').replace(/^\/+/, '');
    
//     return `${this.ApiUrl}/uploads/${normalizedPath}`;
//   }

//   // Versión mejorada de marcarComoFavorito
//   marcarComoFavorito(id: string, favorito: boolean): Observable<any> {
//     if (!id) {
//       return throwError(() => new Error('ID de producto no válido'));
//     }
    
//     return this.http.put<any>(
//       `${this.ApiUrl}/api/productos/${id}/favorito`, 
//       { favorito }
//     ).pipe(
//       catchError(error => {
//         console.error('Error al actualizar favorito:', error);
//         return throwError(() => new Error('Error al actualizar favorito'));
//       })
//     );
//   }

//   // Mantén los demás métodos como están...
//   // ... [otros métodos permanecen igual]
// }