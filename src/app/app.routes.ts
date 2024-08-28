import { Routes } from '@angular/router';


export const routes: Routes = [
    { path: "producto", loadChildren: () => import("./producto/producto.module").then(m => m.ProductoModule) }
];
