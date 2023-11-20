import { Injectable } from '@angular/core';
import { Libro } from 'src/interface/libro';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ServCatalogoService {

  private apiUrl = `${environment.apiURL}/catalogo`;
  
  constructor(private http: HttpClient) { }

  getAll(): Observable<Libro[]> {
    return this.http.get<Libro[]>(this.apiUrl);
  }

  get(id: number): Observable<Libro> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.get<Libro>(url);
  }

  add(libro: Libro): Observable<Libro> {
    return this.http.post<Libro>(this.apiUrl, libro);
  }

  update(id: number, libro: Libro): Observable<Libro> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.put<Libro>(url, libro);
  }

  delete(id: number): Observable<void> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.delete<void>(url);
  }
}
