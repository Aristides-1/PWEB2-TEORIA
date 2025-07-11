import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  baseurl = "http://127.0.0.1:8000";  // URL de tu API de Django
  httpHeaders = new HttpHeaders({ 'Content-Type': 'application/json' });  // Cabeceras para las peticiones HTTP

  constructor(private http: HttpClient) { }

  getAllMovies(): Observable<any> {
    // Petición HTTP GET a la API de Django
    return this.http.get(`${this.baseurl}/movie/`, { headers: this.httpHeaders });

  }
}