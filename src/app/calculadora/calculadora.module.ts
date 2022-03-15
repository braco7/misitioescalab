import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CalculadoraRoutingModule } from './calculadora-routing.module';
import { CalculadoraComponent } from './calculadora.component';
import { MaterialModule } from '../material/material/material.module';
import { DetalleComponent } from './detalle/detalle.component';


@NgModule({
  declarations: [
    CalculadoraComponent,
    DetalleComponent
  ],
  imports: [
    CommonModule,
    CalculadoraRoutingModule,
    MaterialModule
  ]
})
export class CalculadoraModule { }
