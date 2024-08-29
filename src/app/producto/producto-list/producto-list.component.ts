declare var bootstrap: any;
import { Component, OnInit } from '@angular/core';
import { Producto } from '../../models/producto.model';
import { ProductoService } from '../../service/producto.service';
import { CommonModule } from '@angular/common';
import { ProductoEditComponent } from "../producto-edit/producto-edit.component";
import { ProductoDeleteComponent } from '../producto-delete/producto-delete.component';
import { ProductoCreateComponent } from "../producto-create/producto-create.component";

@Component({
  selector: 'app-producto-list',
  standalone: true,
  imports: [CommonModule, ProductoEditComponent, ProductoDeleteComponent, ProductoCreateComponent],
  templateUrl: './producto-list.component.html',
  styleUrl: './producto-list.component.css',
})

export class ProductoListComponent implements OnInit {
  productos: Producto[] = [];
  constructor(private productoService: ProductoService) { }

  ngOnInit(): void {
    this.getProductos();
    // se suscribe al servicio para actualizar la lista
    this.productoService.productos$.subscribe(productos => {
      this.productos = productos;
      console.log('Productos actualizados:');
    });

  }
  getProductos() {
    this.productoService.getProductos().subscribe({
      next: (response) => {
        this.productos = response;
        console.log('Productos:', this.productos);
      },
      error: (err) => {
        console.error('Error al obtener productos:', err);
        alert('Hubo un error al listar los productos.');
      }
    }
    );
  }
  createProducto() {
    const modal = new bootstrap.Modal(document.getElementById('staticBackdrop'));
    modal.show(); // Abre el modal
  }
  productoSeleccionado: Producto = { id: 0, nombre: '' }; // por defecto
  deleteProducto(producto: Producto) {
    this.productoSeleccionado = { ...producto }; // Clona el producto para editarlo
    const modal = new bootstrap.Modal(document.getElementById('deleteModal'));
    modal.show(); // Abre el modal
  }
  editProducto(producto: Producto) {
    this.productoSeleccionado = { ...producto }; // Clona el producto para editarlo
    const modal = new bootstrap.Modal(document.getElementById('myModal'));
    modal.show(); // Abre el modal
  }
}
