import { Routes } from '@angular/router';
import { ProductoModule } from './producto/producto.module';


export const routes: Routes = [
    { path: "producto", loadChildren: () => ProductoModule } // Carga el módulo de productos
];
