import { Component, OnInit } from '@angular/core';
import { Producto } from '../../models/producto.model';
import { HttpClient } from '@angular/common/http';
import { ProductoService } from '../../service/producto.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-producto-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './producto-list.component.html',
  styleUrl: './producto-list.component.css'
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

}
