import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GuardianGuard } from './guards/guardian.guard';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'contact', loadChildren: () => import('./contact/contact.module').then(m => m.ContactModule) },
  { path: '', redirectTo: 'home', pathMatch: "full" },
  { path: 'calculadora', canActivate: [GuardianGuard], loadChildren: () => import('./calculadora/calculadora.module').then(m => m.CalculadoraModule) },
  { path: 'login', loadChildren: () => import('./login/login.module').then(m => m.LoginModule) },
  { path: 'support', canActivate: [GuardianGuard], loadChildren: () => import('./support/support.module').then(m => m.SupportModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
