import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Producto } from '../interfaces/producto.interface';



@Injectable({
  providedIn: 'root'
})
export class ProductosService {

  productos: Producto[] = [];
  cargada = true;

  constructor(private http: HttpClient) { 

    this.cargarProductos();
   

  }

  private  cargarProductos (){

    this.http.get(`https://angular-html-30bae.firebaseio.com/productos_idx.json`).subscribe( (respuesta: Producto[]) => {

      
      this.productos = respuesta;

      setTimeout(() => {

        this.cargada = false;
        
      }, 2000);
     
      
		});

  }
}
