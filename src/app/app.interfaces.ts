export interface Producto {
    name: string;           // Nombre del producto
    description: string;    // Descripción del producto
    price: number;          // Precio del producto
    category: string;       // Categoría del producto
    stock: number;          // Cantidad en stock
    url_direction?: string; // URL de la imagen (opcional)
  }
  