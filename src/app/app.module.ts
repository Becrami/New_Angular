import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './page/home/home.component';
import { EncabezadoComponent } from './pagina/encabezado/encabezado.component';
import { CuerpoComponent } from './pagina/cuerpo/cuerpo.component';
import { PiepaginaComponent } from './pagina/piepagina/piepagina.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    EncabezadoComponent,
    CuerpoComponent,
    PiepaginaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
