import { Injectable } from '@angular/core';
import { Libro } from 'src/interface/libro';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ServMisPrestamosService {


  constructor(private http: HttpClient) { 
   
  }

  getAll():Observable<Libro[]>{

    let url = `${environment.apiURL}/catalogo`;
    
    return this.http.get<Libro[]>(url);
  }


}
