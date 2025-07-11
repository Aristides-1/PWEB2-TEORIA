import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';  // Necesario para las peticiones HTTP

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
  ],
  imports: [
    BrowserModule,
    HttpClientModule,  // Asegúrate de importar este módulo para realizar peticiones HTTP
  ],
  providers: [],
  bootstrap: [AppComponent]  // Especificamos el componente principal para arrancar la aplicación
})
export class AppModule { }