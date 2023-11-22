import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ServCatalogoService } from '../services/serv-catalogo.service';
import { ServMisPrestamosService } from '../services/serv-mis-prestamos.service';
import { Libro } from 'src/interface/libro';

@Component({
  selector: 'app-libro-page',
  templateUrl: './libro-page.page.html',
  styleUrls: ['./libro-page.page.scss'],
})
export class LibroPagePage implements OnInit {

  id:any;
  libro:Libro;

  constructor(
    private servi : ServCatalogoService, 
    private activateRoute: ActivatedRoute,
    private serviPrestamo: ServMisPrestamosService
    ) {
      this.libro = {} as Libro;
     }

  ngOnInit() {
    this .id = this.activateRoute.snapshot.paramMap.get("id");
    this.servi.get(Number(this.id)).subscribe(libro => {
      this.libro = libro;
      console.log(this.libro);
    });
  }

  alquilarLibro() {
    this.serviPrestamo.add(this.libro).subscribe( 
          (libro => this.libro = libro)
      
    );
  }

  

}
