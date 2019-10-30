import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {CommonModule} from '@angular/common'
import { CatalogComponent } from '../../app/catalog-mod/catalog/catalog.component';

const routes: Routes = [
  { path: '', component:  CatalogComponent},
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes)]
})
export class CatalogModRoutingModule { }
