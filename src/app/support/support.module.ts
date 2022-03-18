import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SupportRoutingModule } from './support-routing.module';
import { MaterialModule } from '../material/material/material.module';
import { SupportComponent } from './support.component';


@NgModule({
  declarations: [
    SupportComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    SupportRoutingModule
  ]
})
export class SupportModule { }
