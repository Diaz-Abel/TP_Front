import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

export const routes: Routes = [
    { path: "producto", loadChildren: () => ProductoModule } // Carga el módulo de productos
];
