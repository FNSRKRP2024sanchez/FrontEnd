// export interface Producto {
//     name: string;           // Nombre del producto
//     description: string;    // Descripción del producto
//     price: number;          // Precio del producto
//     category: string;       // Categoría del producto
//     stock: number;          // Cantidad en stock
//     url_direction?: string; // URL de la imagen (opcional)

//   }
  
  // En app.interfaces.ts
export interface Producto {
  _id: string;
  nombre: string;           // Corregir a español
  descripcion: string;      // Corregir a español
  precio: number;           // Corregir a español
  categoria: string;        // Corregir a español
  stock: number;
  telefono: string;
  favorito: boolean;
  imagenes: string[];
  fecha: Date;
}