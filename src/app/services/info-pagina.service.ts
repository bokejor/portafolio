import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { InfoPagina } from '../interfaces/info-pagina-interface';


@Injectable({
  providedIn: 'root'
})
export class InfoPaginaService {

  info: InfoPagina = {};
  equipo: any[] = [];
  cargada = false;

  constructor(private http: HttpClient) {

    this.cargarInfo();
    this.cargarEquipo();
  }
  private cargarInfo(){

    this.http.get(`assets/data/data-pagina.json`).subscribe( (respuesta: InfoPagina) => {

      this.cargada = true;
      this.info = respuesta;
    });

  }

  private  cargarEquipo(){

    this.http.get(`https://angular-html-30bae.firebaseio.com/equipo.json`).subscribe( (respuesta: any[]) => {

      this.equipo = respuesta;
    });
  }
}
