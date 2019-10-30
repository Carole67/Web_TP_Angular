import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { NavigationComponent } from './navigation/navigation.component';
import { FooterComponent } from './footer/footer.component';
import { PhoneFormatPipe } from './phone-format.pipe';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from '../app-routing.module';
import { PageNotFoundComponent} from '../app/page-not-found/page-not-found.component';
import { WelcomePageComponent } from '../app/welcome-mod/welcome-page/welcome-page.component';
import { ArticleDetailsComponent} from '../app/article-details-mod/article-details/article-details.component'

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    FooterComponent,
    PhoneFormatPipe,
    PageNotFoundComponent,
    WelcomePageComponent,
    ArticleDetailsComponent
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
