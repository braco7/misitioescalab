import { Component, OnInit } from '@angular/core';
import { Coin } from '../interfaces/moneda';
import { BitcoinService } from '../services/bitcoin.service';


@Component({
  selector: 'app-calculadora',
  templateUrl: './calculadora.component.html',
  styleUrls: ['./calculadora.component.css']
})
export class CalculadoraComponent implements OnInit {

  listado: Coin[] = []

  constructor(private bitcoinService: BitcoinService) { }

  ngOnInit(): void {

    this.bitcoinService.getAll(5)
      .subscribe(resp => {
        console.log(resp)
        this.listado = resp
      })
  }



}  
