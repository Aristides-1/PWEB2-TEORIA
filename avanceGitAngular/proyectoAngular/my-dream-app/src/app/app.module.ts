import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component'; // Importar AppComponent
import { DataService } from './data'; // Verifica que el archivo data.ts exporte correctamente el servicio

@NgModule({
  declarations: [
    AppComponent  // Declarar el componente aquí
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule,
    HttpClientModule
  ],
  providers: [DataService],
  bootstrap: [AppComponent] // Agregar aquí el componente de inicio
})
export class AppModule { }