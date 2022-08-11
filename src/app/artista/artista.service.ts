import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Artista } from './artista';
import { of,Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ArtistaService {

  private URL:string = 'http://localhost:8080/artistas';
  private httpHeaders = new HttpHeaders({'Content-Type': 'application/json'});

  constructor(private http: HttpClient) { }

  getArtistas(): Observable<Artista[]>{
    return this.http.get<Artista[]>(this.URL);
  }

  getArtista(id: any): Observable<Artista>{
    return this.http.get<Artista>(`${this.URL}/${id}`);
  }

  registrar(artista: Artista): Observable<Artista>{
    console.log(artista)
    return this.http.post<Artista>(this.URL, artista,{headers: this.httpHeaders});
  }

  actualizar(artista: Artista): Observable<Artista>{
    return this.http.put<Artista>(`${this.URL}/${artista.id}`, artista,{headers: this.httpHeaders});
  }

  eliminar(artista: Artista): Observable<Artista>{
    return this.http.delete<Artista>(`${this.URL}/${artista.id}`,{headers: this.httpHeaders});
  }


}
