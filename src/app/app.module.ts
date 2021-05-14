import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from "@angular/forms";

import { AppComponent } from './app.component';
import { ProdutoComponent } from './produto/produto.component';
import { ProdutoDetalhesComponent } from './produto-detalhes/produto-detalhes.component';
import { CadastrarComponent } from './cadastrar/cadastrar.component';
import { AppRoutingModule } from './app-routing.module';
import { PromocaoComponent } from './promocao/promocao.component';

@NgModule({
  declarations: [
    AppComponent,
    ProdutoComponent,
    ProdutoDetalhesComponent,
    CadastrarComponent,
    PromocaoComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
