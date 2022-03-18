import { elementEventFullName } from '@angular/compiler/src/view_compiler/view_compiler';
import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { Coin, Moneda } from 'src/app/interfaces/moneda';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-detalle',
  templateUrl: './detalle.component.html',
  styleUrls: ['./detalle.component.css']
})

export class DetalleComponent implements OnInit {

  //monedaMostrada: Coin = {}
  coinId: string = ""
  @Input() coinn: string = ""
  idDeMoneda: string = ""
  monedaCompleta: Coin;


  constructor(
    private dataService: DataService,
    private route: ActivatedRoute
  ) { }


  ngOnInit(): void {
    this.coinId = this.route.snapshot.paramMap.get("id")

    this.dataService.getMoneda(this.coinId)
      .subscribe(resp => {
        this.monedaCompleta = resp
      })

  }



}
















/* monedaOb: Coin = {
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
  } */