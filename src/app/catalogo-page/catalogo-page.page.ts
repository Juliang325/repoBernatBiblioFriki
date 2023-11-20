import { Component, OnInit } from '@angular/core';
import { ServCatalogoService } from '../services/serv-catalogo.service';
import { Libro } from 'src/interface/libro';

@Component({
  selector: 'app-catalogo-page',
  templateUrl: './catalogo-page.page.html',
  styleUrls: ['./catalogo-page.page.scss'],
})
export class CatalogoPagePage implements OnInit {

  libros: Libro[];

  constructor(private servi:ServCatalogoService) { 
    this.libros = [];
   }

  ngOnInit() {
    this.getCatalogo();
  }

  getCatalogo(){
    this.servi.getAll()
      .subscribe(libros => this.libros = libros);
  }

}
