import { Component, OnInit } from '@angular/core';
import { Coin, Moneda } from '../interfaces/moneda';
import { BitcoinService } from '../services/bitcoin.service';


@Component({
  selector: 'app-calculadora',
  templateUrl: './calculadora.component.html',
  styleUrls: ['./calculadora.component.css']
})
export class CalculadoraComponent implements OnInit {

  listado: Moneda[] = []





  constructor(private bitcoinService: BitcoinService) { }

  ngOnInit(): void {

    this.bitcoinService.getAll(15)
      .subscribe(resp => {
        console.log(resp)
        this.listado = resp
        this.dataSource = this.listado;

      })

  }
  displayedColumns: string[] = ['Moneda', 'Precio', 'Volumen', 'Acciones'];
  dataSource = this.listado;

}  
