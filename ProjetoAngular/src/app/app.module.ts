import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SobreComponent } from './sobre/sobre.component';
import { ContatosComponent } from './contatos/contatos.component';
import { FooterComponent } from './footer/footer.component';
import { EquipeComponent } from './sobre/equipe/equipe.component';
import { TitleComponent } from './sobre/title/title.component';
import { ValueComponent } from './sobre/value/value.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    SobreComponent,
    ContatosComponent,
    FooterComponent,
    EquipeComponent,
    TitleComponent,
    ValueComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
