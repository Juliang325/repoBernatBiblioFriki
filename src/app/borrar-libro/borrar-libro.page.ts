import { Component, OnInit } from '@angular/core';
import { ServMisPrestamosService } from '../services/serv-mis-prestamos.service';
import { ActivatedRoute } from '@angular/router';
import { Libro } from 'src/interface/libro';

@Component({
  selector: 'app-borrar-libro',
  templateUrl: './borrar-libro.page.html',
  styleUrls: ['./borrar-libro.page.scss'],
})
export class BorrarLibroPage implements OnInit {

  id:any;
  libro:Libro;

  constructor(
    private activateRoute: ActivatedRoute,
    private serviPrestamo: ServMisPrestamosService
    ) { 
      this.libro = {} as Libro;0
    }

  ngOnInit() {
    this .id = this.activateRoute.snapshot.paramMap.get("id");
    this.serviPrestamo.get(Number(this.id)).subscribe(libro => {
      this.libro = libro;
      console.log(this.libro);
    });
  }

  borrarLibro(){
    this.serviPrestamo.eliminarLibro(this.id).subscribe(
      r=>{
        console.log("he borrado el libro");
        
      }
    );
  }

}
