import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ProductoCreateComponent } from "./producto/producto-create/producto-create.component";
import { ProductoListComponent } from "./producto/producto-list/producto-list.component";


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ProductoCreateComponent, ProductoListComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'agendamiento-proveedores';
}
