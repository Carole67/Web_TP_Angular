import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { CompteComponent } from './compte/compte.component';
import { NavigationComponent } from './navigation/navigation.component';
import { FooterComponent } from './footer/footer.component';
import { PhoneFormatPipe } from './phone-format.pipe';
import { RecapComponent } from './recap/recap.component';
import { MustMatchDirective } from './_helpers/must-match.directive';
import { CatalogComponent } from './catalog/catalog.component';
import { HttpClientModule } from '@angular/common/http';
import { ProductFilterComponent } from './product-filter/product-filter.component';
import { SpecificProductsPipe } from './specific-products.pipe';
import { AppRoutingModule } from '../app-routing.module';
import {PageNotFoundComponent} from '../app/page-not-found/page-not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    CompteComponent,
    NavigationComponent,
    FooterComponent,
    PhoneFormatPipe,
    RecapComponent,
    MustMatchDirective,
    CatalogComponent,
    ProductFilterComponent,
    SpecificProductsPipe,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgbModule,
    AppRoutingModule,
    ReactiveFormsModule.withConfig({warnOnNgModelWithFormControl:"always"})

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
