import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RouterModule, Routes } from '@angular/router';
import {BasketComponent} from './app/basket-mod/basket/basket.component'
import {PageNotFoundComponent} from './app/page-not-found/page-not-found.component';
import {ArticleDetailsComponent} from './app/article-details-mod/article-details/article-details.component'
import {WelcomePageComponent} from './app/welcome-mod/welcome-page/welcome-page.component'

const appRoutes: Routes = [
  { path: 'welcome', component: WelcomePageComponent },
  //{ path: 'customerAccount', component: CompteComponent},
  { path: 'customerAccount', loadChildren:()=> import('./app/customer-account-mod/customer-account.module').then(m=>m.CustomerAccountModule)},
  { path: 'catalog', loadChildren: () => import('./app/catalog-mod/catalog-mod.module').then(m=>m.CatalogModModule) },
  { path: 'articleDetails', component: ArticleDetailsComponent },
  { path: 'basket', component: BasketComponent },
  //{ path: '**', component: PageNotFoundComponent },
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
