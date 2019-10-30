import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CustomerAccountRoutingModule } from './customer-account-routing.module';
import {CompteComponent} from './compte/compte.component';
import { RecapComponent } from './recap/recap.component';
import {FormsModule,ReactiveFormsModule} from '@angular/forms';
import { MustMatchDirective } from '../_helpers/must-match.directive';

@NgModule({
  declarations: [
    CompteComponent,
    RecapComponent,
    MustMatchDirective,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    CustomerAccountRoutingModule
  ]
})
export class CustomerAccountModule { }
