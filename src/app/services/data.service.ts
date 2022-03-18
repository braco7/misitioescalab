import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { map } from 'rxjs/operators';
import { Coin, Moneda } from '../interfaces/moneda';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  monedaId: string = ""

  private url: string = "https://api.coinstats.app/public/v1/coins/"


  constructor(private http: HttpClient) { }


  getAll(cantidad: number) {
    const httpOptions = {
      params: new HttpParams({ fromString: `limit=${cantidad}&currency=USD` })
    }
    return this.http.get<any>(`${this.url}`, httpOptions)
      .pipe(map((resp) => {
        return resp.coins
      })
      )
  }

  getMoneda(coinId: string): Observable<Coin> {
    const httpOption2 = {
      params: new HttpParams({ fromString: `currency=USD` })
    }
    return this.http.get<Moneda>(`${this.url}${coinId}?`, httpOption2)
      .pipe(map((resp) => {
        return resp.coin
      })
      )


  }


}
