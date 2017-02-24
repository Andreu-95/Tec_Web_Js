import {Component, OnInit} from '@angular/core';
import {Response, Http} from "@angular/http";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title: string = 'Hola todos';
  nombre: string = "";
  apellido: string = "";
  font = '25px';
  classes = 'btn btn-success btn-block';

  nuevaTienda: any = {};

  constructor(private _http: Http) {
    this.apellido = 'Guerra';
    this.nombre = 'Andres';
    console.log('Inicio el constructor');
  }

  ngOnInit() {
    this.apellido = 'Vásconez';
    this.nombre = 'David';
    console.log('On Init')
  }

  nombreCompleto(): string {
    return `${this.nombre} ${this.apellido}`
  }

  hizoClic() {
    console.log('Hizo clic')
  }

  hizoFocus() {
    console.log('Hizo focus')
  }

  crearTienda(formulario) {
    console.log(formulario);
    this._http
      .post("http://localhost:1337/Tienda", formulario.valores)
      .subscribe(
        res => console.log('Respuesta: ', res),
        err => console.log('Error: ', err),
        () => {
          console.log("Se completo la accion")
        }
      );
  }
}
