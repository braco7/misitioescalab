import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators'
import { Coin, Moneda } from '../interfaces/moneda';

export enum Monedas {
  BTC = "bitcoin",
  ETH = "ethereum",
}

@Injectable({
  providedIn: 'root'
})
export class BitcoinService {
  //private apiKey: string = "34A77654-5D78-4012-8594-EC03CC9E28D4"

  private url: string = "https://api.coinstats.app/public/v1/coins/"
  private urlBTC: string = "https://api.coinstats.app/public/v1/coins/bitcoin?currency=USD"


  /* precioBTC$: Observable<any> = this.http.get<any>(`${this.urlBTC}`)
    .pipe(map((resp: any) => resp)
    ) */
  constructor(private http: HttpClient) { }

  getBTC() {
    return this.http.get<Moneda>(this.urlBTC)

  }

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

  getMoneda(coinId: string) {
    const httpOption2 = {
      params: new HttpParams({ fromString: `currency=USD` })
    }
    return this.http.get<Moneda>(`${this.url}${coinId}`, httpOption2)

  }

}



