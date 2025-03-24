import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'home',
    loadComponent: () => import('./home/home.page').then((m) => m.HomePage),
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'login',
    loadComponent: () => import('./pages/login/login.page').then( m => m.LoginPage)
  },
  {
    path: 'new-product',
    loadComponent: () => import('./pages/new-product/new-product.page').then( m => m.NewProductPage)
  },
  {
    path: 'perfil',
    loadComponent: () => import('./pages/perfil/perfil.page').then( m => m.PerfilPage)
  },
  {
    path: 'productos-proveedor',
    loadComponent: () => import('./pages/productos-proveedor/productos-proveedor.page').then( m => m.ProductosProveedorPage),
    
  },
  {
    path: 'productos-proveedor/:proveedorId',
    loadComponent: () => import('./pages/productos-proveedor/productos-proveedor.page')
      .then(m => m.ProductosProveedorPage)
  },
  {
    path: 'register',
    loadComponent: () => import('./pages/register/register.page').then( m => m.RegisterPage)
  },
  {
    path: 'perfil',
    loadComponent: () => import('./pages/perfil/perfil.page').then( m => m.PerfilPage)
  },
  {
    path: 'actualizar-perfil',
    loadComponent: () => import('./pages/actualizar-perfil/actualizar-perfil.page').then( m => m.ActualizarPerfilPage)
  },
  {
    path: 'actualizar-perfil/:id',
    loadComponent: () => import('./pages/actualizar-perfil/actualizar-perfil.page').then(m => m.ActualizarPerfilPage)
  },
  {
    path: 'new-product/:id',  
    loadComponent: () => import('./pages/new-product/new-product.page').then(m => m.NewProductPage)
  },
  {
    path: 'productos-categoria',
    loadComponent: () => import('./pages/productos-categoria/productos-categoria.page').then( m => m.ProductosCategoriaPage)
  },
  {
    path: 'productos-categoria/:categoria',  // Esta es la ruta con el parámetro dinámico
    loadComponent: () => import('./pages/productos-categoria/productos-categoria.page').then(m => m.ProductosCategoriaPage)
  },
  {
    path: 'resultados',
    loadComponent: () => import('./pages/resultados/resultados.page').then( m => m.ResultadosPage)
  },
  {
    path: 'producto',
    loadComponent: () => import('./pages/producto/producto.page').then( m => m.ProductoPage)
  },
  {
    path: 'producto/:id',  // Esta ruta toma un parámetro 'id' del producto
    loadComponent: () => import('./pages/producto/producto.page').then(m => m.ProductoPage)
  },
  {
    path: 'favoritos',
    loadComponent: () => import('./pages/favoritos/favoritos.page').then( m => m.FavoritosPage)
  },
  {
    path: 'dashboard',
    loadComponent: () => import('./pages/dashboard/dashboard.component').then(m => m.DashboardComponent)
  }
  

  
  
];
