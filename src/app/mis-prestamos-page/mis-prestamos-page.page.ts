



import { Component, OnInit } from '@angular/core';
import { ServMisPrestamosService } from '../services/serv-mis-prestamos.service';
import { Libro } from 'src/interface/libro';

@Component({
  selector: 'app-mis-prestamos-page',
  templateUrl: './mis-prestamos-page.page.html',
  styleUrls: ['./mis-prestamos-page.page.scss'],
})
export class MisPrestamosPagePage implements OnInit {

  libros: Libro[];
  constructor(private servi:ServMisPrestamosService) { 
    this.libros = [];
  }


  ngOnInit() {
    this.getPrestamos();
  }

  getPrestamos(){
    this.servi.getAll()
      .subscribe(libros => this.libros = libros);
  }

  deleteLibro(){
    this.servi.eliminarLibro(1);
  }

  


  

}
