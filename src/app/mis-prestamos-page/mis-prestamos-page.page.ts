



import { Component, OnInit } from '@angular/core';
import { ServMisPrestamosService } from '../services/serv-mis-prestamos.service';
import { Libro } from 'src/interface/libro';
import { LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-mis-prestamos-page',
  templateUrl: './mis-prestamos-page.page.html',
  styleUrls: ['./mis-prestamos-page.page.scss'],
})
export class MisPrestamosPagePage implements OnInit {

  libros: Libro[];
  constructor(private servi:ServMisPrestamosService, private loadingCtrl:LoadingController) { 
    this.libros = [];
  }


  ngOnInit() {
   // this.getPrestamos();
  }

  ionViewWillEnter(){
    this.getPrestamos();
  }

  getPrestamos(){
    this.showLoading();
    this.servi.getAll()
      .subscribe(libros => {
        this.libros = libros;
        this.loadingCtrl.dismiss();
      });
  }

  deleteLibro(){
    this.servi.eliminarLibro(1);
  }

  async showLoading() {
    const loading = await this.loadingCtrl.create({
      message: 'Waiting...',
      duration: 30000,
    });

    loading.present();
  }

  


  

}
