import { elementEventFullName } from '@angular/compiler/src/view_compiler/view_compiler';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Coin, Moneda } from '../interfaces/moneda';
import { DataService } from '../services/data.service';


@Component({
  selector: 'app-calculadora',
  templateUrl: './calculadora.component.html',
  styleUrls: ['./calculadora.component.css']
})
export class CalculadoraComponent implements OnInit {

  listado: Moneda[] = []

  coined: string = ""

  constructor(public dataService: DataService,
    private router: Router) { }

  ngOnInit(): void {

    this.dataService.getAll(15)
      .subscribe(resp => {
        this.listado = resp
        this.dataSource = this.listado;

      })

  }
  displayedColumns: string[] = ['Moneda', 'Precio', 'Volumen', 'Acciones'];
  dataSource = this.listado;


}  
