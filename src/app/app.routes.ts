import { Routes } from '@angular/router';
import { ProductoModule } from './producto/producto.module';
import { JaulaModule } from './jaula/jaula.module';


export const routes: Routes = [
    { path: "producto", loadChildren: () => ProductoModule }, // Carga el módulo de productos
    { path: "jaula", loadChildren: () => JaulaModule } // Carga el módulo de jaulas
];
