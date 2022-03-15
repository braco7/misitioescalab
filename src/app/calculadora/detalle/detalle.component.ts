import { Component, Input, OnInit } from '@angular/core';
import { Moneda } from 'src/app/interfaces/moneda';
import { BitcoinService } from 'src/app/services/bitcoin.service';

@Component({
  selector: 'app-detalle',
  templateUrl: './detalle.component.html',
  styleUrls: ['./detalle.component.css']
})
export class DetalleComponent implements OnInit {

  moneda: string = "ethereum";
  marketcap: number = 0

  constructor(private bitcoinService: BitcoinService) { }


  ngOnInit(): void {

  }

  verMoneda() {
    this.bitcoinService.getMoneda(this.moneda)
      .subscribe(resp => {
        this.marketcap = resp.coin.marketCap

      })
  }

}

