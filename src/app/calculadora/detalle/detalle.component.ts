import { Component, Input, OnInit } from '@angular/core';
import { Coin, Moneda } from 'src/app/interfaces/moneda';
import { BitcoinService } from 'src/app/services/bitcoin.service';

@Component({
  selector: 'app-detalle',
  templateUrl: './detalle.component.html',
  styleUrls: ['./detalle.component.css']
})
export class DetalleComponent implements OnInit {

  @Input() moneda: string = "ethereum"
  monedaName: string = ""
  monedaSymbol: string = ""
  monedaImg: string = ""

  marketcap: number = 0
  price: number = 0
  availablesupply: number = 0

  monedaOb: Coin = {
    id: '',
    icon: '',
    name: '',
    symbol: '',
    rank: 0,
    price: 0,
    priceBtc: 0,
    volume: 0,
    marketCap: 0,
    availableSupply: 0,
    totalSupply: 0,
    priceChange1h: 0,
    priceChange1d: 0,
    priceChange1w: 0,
    websiteUrl: '',
    twitterUrl: '',
    exp: []
  }


  constructor(private bitcoinService: BitcoinService) { }


  ngOnInit(): void {
  }

  verMoneda(moneda: string) {
    this.bitcoinService.getMoneda(moneda)
      .subscribe(resp => {
        this.monedaName = resp.coin.name
        this.monedaSymbol = resp.coin.symbol
        this.monedaImg = resp.coin.icon
        this.monedaOb = resp.coin
        this.price = resp.coin.price
        this.marketcap = resp.coin.marketCap
        this.availablesupply = resp.coin.availableSupply

        console.log(this.monedaOb)
      })
  }

}

