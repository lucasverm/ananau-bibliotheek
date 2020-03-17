import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable, Subject, of } from 'rxjs';
import { GebruikerItem } from '../models/gebruiker-item';
import { map, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class OntleenService {

  constructor(private http: HttpClient) { }

  public loadingError$ = new Subject<string>();

  getOntleendeBoekenVanGebruiker$(vanaf: number, hoeveelheid: number): Observable<any[]> {
    return this.http.get(`${environment.apiUrl}/ontleen/GetOntleendeBoekenVanGebruiker?vanaf=${vanaf}&hoeveelheid=${hoeveelheid}`).pipe(
      catchError(error => {
        this.loadingError$.next(error.statusText);
        return of(null);
      }),
      map((list: any[]): any[] => {
        list["gebruikerItems"] = list["gebruikerItems"].map(GebruikerItem.fromJSON)
        return list;
      })
    );
  }

  getOntleenHistorieVanGebruiker$(vanaf: number, hoeveelheid: number): Observable<any[]> {
    return this.http.get(`${environment.apiUrl}/ontleen/GetOntleenHistorieVanGebruiker?vanaf=${vanaf}&hoeveelheid=${hoeveelheid}`).pipe(
      catchError(error => {
        this.loadingError$.next(error.statusText);
        return of(null);
      }),
      map((list: any[]): any[] => {
        list["gebruikerItems"] = list["gebruikerItems"].map(GebruikerItem.fromJSON)
        return list;
      })
    );
  }
}
