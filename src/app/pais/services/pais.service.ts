import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs'
import { Country } from '../interfaces/pais.interface';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PaisService {

  private apiUrl: string = 'https://restcountries.com/v3.1';

  get httpParams(){
    return new HttpParams()
    .set('fields','name,capital,flags,population,cioc,cca2n' )
  }
  constructor(private http: HttpClient) { }

  buscarPais(termino: String): Observable<Country[]> {
  const url = `${this.apiUrl}/name/${termino}`;
  return this.http.get<Country[]>(url,{params: this.httpParams});
}
  buscarCapital(termino: String): Observable<Country[]>{
    const url = `${this.apiUrl}/capital/${termino}`
    return this.http.get<Country[]>(url,{params: this.httpParams});
  }
  buscarRegion(termino: String): Observable<Country[]>{
    
    const url = `${this.apiUrl}/region/${termino}`
    return this.http.get<Country[]>(url,{params: this.httpParams}).pipe(
      tap(console.log)
    );
  }

  getPaisPorAlpha(termino: String): Observable<Country>{
    const url = `${this.apiUrl}/alpha?codes=${termino}`
    return this.http.get<Country>(url);
  }
}

