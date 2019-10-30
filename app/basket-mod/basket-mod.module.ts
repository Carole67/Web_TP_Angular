import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BasketModRoutingModule } from './basket-mod-routing.module';
import { BasketComponent } from './basket/basket.component';


@NgModule({
  declarations: [BasketComponent],
  imports: [
    CommonModule,
    BasketModRoutingModule
  ]
})
export class BasketModModule { }
