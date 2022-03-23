import { Component, Input, OnInit } from '@angular/core';
import { Coin } from 'src/app/interfaces/moneda';

@Component({
  selector: 'app-masdetalles',
  templateUrl: './masdetalles.component.html',
  styleUrls: ['./masdetalles.component.css']
})


export class MasdetallesComponent implements OnInit {

  @Input() moneda: Coin;

  constructor() { }

  ngOnInit(): void {
    console.log(this.moneda)
  }




}
