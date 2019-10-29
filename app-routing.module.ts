import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RouterModule, Routes } from '@angular/router';
import { CompteComponent } from './app/compte/compte.component';
import { CatalogComponent } from './app/catalog/catalog.component';
import {PageNotFoundComponent} from './app/page-not-found/page-not-found.component';

const appRoutes: Routes = [
  { path: 'welcome', component: CompteComponent },
  { path: 'catalog', component: CatalogComponent },
  { path: '**', component: PageNotFoundComponent }
  /*{ path: 'Accueil', component: Catalog },
  { path: 'Accueil', component: ArticleDetails },
  { path: 'Accueil', component: Basket },*/
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(appRoutes),
  ],
  exports: [
    RouterModule
  ]
})

export class AppRoutingModule { }
