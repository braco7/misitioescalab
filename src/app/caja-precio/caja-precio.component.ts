import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-caja-precio',
  templateUrl: './caja-precio.component.html',
  styleUrls: ['./caja-precio.component.css']
})
export class CajaPrecioComponent implements OnInit {

  constructor(
    private dataService: DataService) { }

  precio: number = 0

  ngOnInit(): void {
    this.dataService.getMoneda("bitcoin")
      .subscribe(resp => {
        this.precio = resp.price
      })
  }


}
