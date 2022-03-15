import { Component, OnInit } from '@angular/core';
import { BitcoinService } from '../services/bitcoin.service';

@Component({
  selector: 'app-caja-precio',
  templateUrl: './caja-precio.component.html',
  styleUrls: ['./caja-precio.component.css']
})
export class CajaPrecioComponent implements OnInit {

  constructor(private bitcoinService: BitcoinService) { }

  precio: number = 0

  ngOnInit(): void {
    this.bitcoinService.getBTC()
      .subscribe(resp => {
        this.precio = resp.coin.price
      })
  }


}
