import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TextoProibidoDirective } from './texto-proibido.directive';
import { SenhaIgualDirective } from './senha-igual.directive';

@NgModule({
  declarations: [
    AppComponent,
    TextoProibidoDirective,
    SenhaIgualDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
