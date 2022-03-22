import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GuardianGuard } from '../guards/guardian.guard';
import { HomeComponent } from '../home/home.component';
import { CalculadoraComponent } from './calculadora.component';
import { DetalleComponent } from './detalle/detalle.component';

const routes: Routes = [
  { path: '', component: CalculadoraComponent },
  { path: "detalle/:id", component: DetalleComponent, canActivate: [GuardianGuard] },
  { path: '**', redirectTo: '' }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CalculadoraRoutingModule { }
