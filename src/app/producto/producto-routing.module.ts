import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductoCreateComponent } from './producto-create/producto-create.component';
import { ProductoListComponent } from './producto-list/producto-list.component';
import { PagesContainerComponent } from './pages-container/pages-container.component';

const routes: Routes = [
  {
    path: '',
    component: PagesContainerComponent,
    children: [
      { path: "list", component: ProductoListComponent },
      { path: "create", component: ProductoCreateComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductoRoutingModule { }
