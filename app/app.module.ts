import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { CompteComponent } from './compte/compte.component';
import { NavigationComponent } from './navigation/navigation.component';
import { FooterComponent } from './footer/footer.component';
import { PhoneFormatPipe } from './phone-format.pipe';
import { RecapComponent } from './recap/recap.component';

@NgModule({
  declarations: [
    AppComponent,
    CompteComponent,
    NavigationComponent,
    FooterComponent,
    PhoneFormatPipe,
    RecapComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
