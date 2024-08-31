import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

export const routes: Routes = [
  
  // Carga perezosa del módulo de productos
  { path: "producto", loadChildren: () => import('./producto/producto.module').then(m => m.ProductoModule) },

  // Carga perezosa del módulo de proveedores
  { path: "proveedores", loadChildren: () => import('./proveedor/proveedor.module').then(m => m.ProveedorModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
