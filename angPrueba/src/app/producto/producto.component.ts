import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {Http} from "@angular/http";
import {MasterURLService} from "../services/master-url.service";

@Component({
  selector: 'app-producto',
  templateUrl: './producto.component.html',
  styleUrls: ['./producto.component.css']
})
export class ProductoComponent implements OnInit {
  private _parametros: any;
  productos = [];

  constructor(private _ActivatedRoute: ActivatedRoute, private _http: Http, private _masterURL: MasterURLService) { }

  ngOnInit() {
    this._ActivatedRoute.params.subscribe(parametros => {
      this._parametros = parametros;
      this._http
        .get(this._masterURL.url + 'Producto?idTienda=' + this._parametros.idTienda)
        .subscribe(
          res => {
            this.productos = res.json()
          },
          err => {
            console.log('Error: ', err)
          }
        )

    })
  }

}
