import { NgModule } from '@angular/core';
import {ProdutoComponent} from "./produto/produto.component";
import { RouterModule, Routes } from '@angular/router';
import { PromocaoComponent } from './promocao/promocao.component';

const routes : Routes = [
  {path: "produtos", component: ProdutoComponent},
  {path: "promocoes", component: PromocaoComponent}
];


@NgModule({
  declarations: [],
  exports: [RouterModule],
  imports: [RouterModule.forRoot(routes)]
})
export class AppRoutingModule { }
