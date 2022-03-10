import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators'
import { Moneda } from '../interfaces/moneda';

@Injectable({
  providedIn: 'root'
})
export class BitcoinService {

  /* precio: any = 0
  private url: string = "https://rest.coinapi.io/"

  private apiKey: string = "34A77654-5D78-4012-8594-EC03CC9E28D4"

  moneda: string = "BTC" */

  constructor(private http: HttpClient) { }

  /* httpOptions = {
    headers: new HttpHeaders({
      'X-CoinAPI-Key': this.apiKey,
      'Accept': 'application/json',
      'Accept-Encoding': "deflate,gzip"
    })
  }

  get() {
    return this.http.get(`${this.url}v1/assets/${this.moneda}`, this.httpOptions)
      .pipe(map((x: any) => x[0].price_usd)
      )
  } */

}


